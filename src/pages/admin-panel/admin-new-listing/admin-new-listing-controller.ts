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
    image: string;
    businessData: IBusiness[];
    categoryData: ICategoryData[];
    subCategoryData: ISubCategoryData[];
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
      target: { files: SetStateAction<string>[] };
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
  const [image, setImage] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [businessLocation, setBusinessLocation] = useState<string>("");
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const businessData = useAppSelector(GET_BUSINESS);

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
    target: { files: SetStateAction<string>[] };
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

  const submitHandler = (): void => {
    dispatch(
      AdminThunk.createListing({
        name: businessName,
        tagline: headline,
        latitude: "56789",
        longitute: "6789",
        location: businessLocation,
        description: description,
        addedBy: "7",
        status: "Active",
        type: "Pending",
        country: "1",
        state: "2",
        city: "3",
        onBanner: false,
        image: image,
        email: email,
        category: category,
        subCategory: subCategory,
      })
    );
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
      subCategoryData,
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
