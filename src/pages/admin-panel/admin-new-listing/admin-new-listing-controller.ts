import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_SUB_CATEGORY, GET_BUSINESS } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import Switch from "@mui/material/Switch";
import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AdminRoutePathEnum } from "enum";

interface INewlistingControllerReturns {
  getters: {
    headline: string;
    description: string;
    subCategory: string;
    businessName: string;
    category: string;
    businessLocation: string;
    email: string;
    tagLine: string;
    image: any;
    businessData: IBusiness[];
    categoryData: ICategoryData[];
    filteredSubCategory: ISubCategoryData[];
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCategoryChange: (event: SelectChangeEvent) => void;
    handleSubCategoryChange: (event: SelectChangeEvent) => void;
    handleBusinessNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBusinessLocationhange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleProductChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleImageChange: (event: {
      target: { files: SetStateAction<any>[] };
    }) => void;
    submitHandler: () => void;
    handleBanner: (event: any) => void;
  };
}

/**
 * Newlisting Controller
 * @return {INewlistingControllerReturns}
 */
export const NewlistingController = (): INewlistingControllerReturns => {
  const [businessName, setBuisnessName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [tagLine, setTagLine] = useState<string>("");
  const [image, setImage] = useState<any>([]);
  const [subCategory, setSubCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [businessLocation, setBusinessLocation] = useState<string>("");
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const businessData = useAppSelector(GET_BUSINESS);
  const [banner, setBanner] = useState<string>("false");
  const dispatch = useAppDispatch();

  // const businessData = useAppSelector(GET_BUSINESS);
  const editScreen = useLocation()
  // console.log(categoryData, 'editScreen?.state?.id')

  useEffect(() => {
    if (editScreen?.state?.edit === true) {

      // console.log(editScreen.state, 'item')

      const filter = businessData?.filter((item) => {
        // console.log(item?.iBusinessId, 'item')


        if (item?.iBusinessId === editScreen?.state?.id) {
          console.log(item, 'item')
          // item
          setBuisnessName(item?.vName)
          setBusinessLocation(item?.vLocation)
          setDescription(item?.tDescription)
          setBanner(item.onBanner == 1 ? 'true' : 'false')
          setEmail(item?.vEmail)

          console.log(item?.iCountry)

          const filterCategory = categoryData?.filter((item: any) => {
            // console.log(item, 'cateitem')
            if (item?.iCategoryId === item?.iCountry) {
              // setCategory(item.vName)
            }
          })

          // if (cateitem.iCategoryId === item?.iCountry) {
          //   console.log(cateitem)
          // }
          // );


          // setCategory('')
          // setSubCategory('')
          setTagLine('asdfdsf asdfasdf assad')
        }
      })




    }
  }, [editScreen])






  const handleHeadlineChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setHeadline(event.target.value as string);
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value as string);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value as string);
  };

  const handleProductChange = (event: SelectChangeEvent): void => {
    setTagLine(event.target.value as string);
  };

  const handleImageChange = (event: {
    target: { files: SetStateAction<any>[] };
  }): void => {
    setImage(event.target.files[0]);
  };

  const handleBanner = (event: any): void => {
    setBanner(event.target.checked);
  };

  const handleCategoryChange = (event: SelectChangeEvent): void => {
    setCategory(event.target.value as string);
  };

  const handleBusinessNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
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
  console.log(banner, "banner state");

  const navigate = useNavigate();

  const submitHandler = async (): Promise<void> => {
    const form = new FormData();
    form.append("name", businessName);
    form.append("latitude", "56789");
    form.append("longitute", "6789");
    form.append("location", businessLocation);
    form.append("description", description);
    form.append("addedBy", "7");
    form.append("status", "Active");
    form.append("type", "Pending");
    form.append("country", "1");
    form.append("state", "2");
    form.append("city", "2");
    form.append("onBanner", banner);
    form.append("image", image, image?.name);
    form.append("email", email);
    form.append("category", category);
    form.append("subCategory", subCategory);
    form.append("tagLine", tagLine);

    const res = await dispatch(AdminThunk.createListing(form));
    navigate(AdminRoutePathEnum.ADMIN_LISTING);
    toast.success("Create Listing SuccessFully");
  };

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

  const filteredSubCategory = subCategoryData?.filter(
    (item: { iCategoryId: string }) => {
      return item.iCategoryId == category;
    }
  );

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

  return {
    getters: {
      headline,
      description,
      subCategory,
      businessName,
      category,
      businessLocation,
      email,
      tagLine,
      businessData,
      categoryData,
      filteredSubCategory,
      image,
    },
    handlers: {
      handleHeadlineChange,
      submitHandler,
      handleDescriptionChange,
      handleCategoryChange,
      handleSubCategoryChange,
      handleBusinessNameChange,
      handleBusinessLocationhange,
      handleEmailChange,
      handleProductChange,
      handleImageChange,
      handleBanner,
    },
  };
};
