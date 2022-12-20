import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

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
    handleImageChange: (event: SelectChangeEvent) => void;
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

  const handleImageChange = (event: SelectChangeEvent): void => {
    setImage(event.target.value as string);
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
        headline: headline,
        description: description,
        subCategory: subCategory,
        businessName: businessName,
        businessCategory: category,
        businessLocation: businessLocation,
        email: email,
        productcategory: productCategory,
        image: "abc",
      })
    );
  };

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
