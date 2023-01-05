import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import {
  GET_BUSINESS,
  GET_CATEGORY,
  GET_NOTIFICATION,
  GET_SUB_CATEGORY,
} from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { AdminRoutePathEnum } from "enum";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import moment, { Moment } from "moment";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface INewNotificationButtonControllerReturns {
  getters: {
    headline: string;
    date: Moment;
    description: string;
    subCategory: string;
    businessName: string;
    category: string;
    businessLocation: string;
    businessData: IBusiness[];
    categoryData: ICategoryData[];
    filteredSubCategory: ISubCategoryData[];
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (date: Moment | null) => void;
    handleCategoryChange: (event: SelectChangeEvent) => void;
    handleSubCategoryChange: (event: SelectChangeEvent) => void;
    handleBusinessNameChange: (event: SelectChangeEvent) => void;
    handleBusinessLocationhange: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * New Reward Controller
 * @return {INewNotificationButtonControllerReturns}
 */
export const NewNotificationButtonController =
  (): INewNotificationButtonControllerReturns => {
    const [headline, setHeadline] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<Moment>(moment());
    const [category, setCategory] = useState<any>("");
    const [businessName, setBuisnessName] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");
    const [businessLocation, setBusinessLocation] = useState<string>("");
    const categoryData = useAppSelector(GET_CATEGORY);
    const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
    const businessData = useAppSelector(GET_BUSINESS);
    const editScreen = useLocation();
    console.log(editScreen, "helo");
    const notificationData = useAppSelector(GET_NOTIFICATION);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //   if (editScreen?.state?.edit === true) {
    //     const filter = notificationData?.filter((item) => {
    //       // console.log(categoryData, "dddddddd");
    //       console.log("item", item.iCategoryId);
    //       const categoryId = item.iCategoryId;

    //       // if (item?.iNotificationId === editScreen.state?.id) {
    //       // setCategory(item?.iCategoryId);
    //       const categoryFilter = categoryData?.filter((item: any) => {
    //         if (item?.iCategoryId === categoryId) {
    //           setCategory(item.vName);
    //         }
    //       });
    //       // }
    //     });
    //   }
    // }, [editScreen]);

    const handleDateChange = (date: Moment | null): void => {
      if (!date) {
        return;
      }
      setDate(date);
    };

    const handleHeadlineChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setHeadline(event.target.value as string);
    };

    const handleDescriptionChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setDescription(event.target.value as string);
    };

    const handleCategoryChange = (event: SelectChangeEvent): void => {
      setCategory(event.target.value as string);
    };

    const handleBusinessNameChange = (event: SelectChangeEvent): void => {
      setBuisnessName(event.target.value as string);
    };

    const handleSubCategoryChange = (event: SelectChangeEvent): void => {
      setSubCategory(event.target.value as any);
    };

    const handleBusinessLocationhange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setBusinessLocation(event.target.value as string);
    };

    const filteredSubCategory = subCategoryData?.filter(
      (item: { iCategoryId: string }) => {
        return item.iCategoryId == category;
      }
    );

    const allBusiness = useCallback(async () => {
      try {
        await dispatch(UserThunk.business());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      allBusiness();
    }, [allBusiness]);

    const getcategory = useCallback(async () => {
      try {
        await dispatch(AdminThunk.getCategory());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      getcategory();
    }, [getcategory]);

    const getSubCategory = useCallback(async () => {
      try {
        await dispatch(AdminThunk.getSubCategory());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      getSubCategory();
    }, [getSubCategory]);

    const navigate = useNavigate();

    const submitHandler = async (): Promise<void> => {
      await dispatch(
        AdminThunk.newNotification({
          headline: headline,
          desc: description,
          date: "12-13-20202",
          businessLocation: businessLocation,
          categoryId: category,
          subCategoryId: subCategory,
          businessId: businessName,
        })
      );
      navigate(AdminRoutePathEnum.ADMIN_NOTIFICATION);
    };

    return {
      getters: {
        headline,
        date,
        description,
        subCategory,
        businessName,
        category,
        businessLocation,
        businessData,
        categoryData,
        filteredSubCategory,
      },
      handlers: {
        handleHeadlineChange,
        submitHandler,
        handleDescriptionChange,
        handleDateChange,
        handleCategoryChange,
        handleSubCategoryChange,
        handleBusinessNameChange,
        handleBusinessLocationhange,
      },
    };
  };
