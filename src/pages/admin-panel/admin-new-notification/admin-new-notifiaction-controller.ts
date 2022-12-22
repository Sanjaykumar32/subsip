import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSINESS, GET_CATEGORY, GET_SUB_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import moment, { Moment } from "moment";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

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
    subCategoryData: ISubCategoryData[];
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
    const [category, setCategory] = useState<string>("");
    const [businessName, setBuisnessName] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");
    const [businessLocation, setBusinessLocation] = useState<string>("");
    const categoryData = useAppSelector(GET_CATEGORY);
    const subCategoryData = useAppSelector(GET_SUB_CATEGORY);

    const dispatch = useAppDispatch();

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
      setSubCategory(event.target.value as string);
    };

    const handleBusinessLocationhange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setBusinessLocation(event.target.value as string);
    };

    const businessData = useAppSelector(GET_BUSINESS);

    const allBusiness = useCallback(async () => {
      try {
        dispatch(UserThunk.business());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      allBusiness();
    }, [allBusiness]);

    const getcategory = useCallback(async () => {
      try {
        dispatch(AdminThunk.getCategory());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      getcategory();
    }, [getcategory]);

    const getSubCategory = useCallback(async () => {
      try {
        dispatch(AdminThunk.getSubCategory());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      getSubCategory();
    }, [getSubCategory]);

    const submitHandler = (): void => {
      dispatch(
        AdminThunk.newNotification({
          Headline: headline,
          Desc: description,
          Date: "12-13-20202",
          BusinessLocation: businessLocation,
          CategoryId: category,
          SubCategoryId: subCategory,
          BusinessId: businessName,
        })
      );
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
        subCategoryData,
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
