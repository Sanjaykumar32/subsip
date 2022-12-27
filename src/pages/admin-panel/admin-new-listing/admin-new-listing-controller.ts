import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_SUB_CATEGORY, GET_BUSINESS } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
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
    productCategory: string;
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
    handleProductChange: (event: SelectChangeEvent) => void;
    handleImageChange: (event: {
      target: { files: SetStateAction<any>[] };
    }) => void;
    submitHandler: () => void;
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
  const [productCategory, setProductCategory] = useState<string>("");
  const [image, setImage] = useState<any>([]);
  const [subCategory, setSubCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [businessLocation, setBusinessLocation] = useState<string>("");
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const businessData = useAppSelector(GET_BUSINESS);

  // console.log(image, 'image')
  // console.log(image.name, 'image name')

  const dispatch = useAppDispatch();

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
    setProductCategory(event.target.value as string);
  };

  const handleImageChange = (event: {
    target: { files: SetStateAction<any>[] };
  }): void => {
    setImage(event.target.files[0]);
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
    form.append("onBanner", "true");
    form.append("image", image, image?.name);
    form.append("email", email);
    form.append("category", category);
    form.append("subCategory", subCategory);

    const res = await dispatch(AdminThunk.createListing(form));
    // console.log(res, 'res ')
    navigate(AdminRoutePathEnum.ADMIN_LISTING);
    toast.success("Create Listing SuccessFully");
  };

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

  const filteredSubCategory = subCategoryData?.filter(
    (item: { iCategoryId: string }) => {
      return item.iCategoryId == category;
    }
  );

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

  return {
    getters: {
      headline,
      description,
      subCategory,
      businessName,
      category,
      businessLocation,
      email,
      productCategory,
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
    },
  };
};
