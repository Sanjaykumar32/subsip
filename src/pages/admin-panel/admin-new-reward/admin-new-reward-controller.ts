import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useState } from "react";

interface INewRewardControllerReturns {
  getters: {
    name: string;
    category: string;
    availibility: string;
    subCategory: string;
    businessName: string;
  };
  handlers: {
    handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleAvailibityChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCategoryChange: (event: SelectChangeEvent) => void;
    handleSubCategoryChange: (event: SelectChangeEvent) => void;
    handleBusinessNameChange: (event: SelectChangeEvent) => void;
    submitHandler: () => void;
  };
}

/**
 * New Reward Controller
 * @return {INewRewardControllerReturns}
 */
export const NewRewardController = (): INewRewardControllerReturns => {
  const [name, setName] = useState<string>("");
  const [availibility, setAvailibility] = useState<string>("");

  const [category, setCategory] = useState<string>("");
  const [businessName, setBuisnessName] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleCategoryChange = (event: SelectChangeEvent): void => {
    setCategory(event.target.value as string);
  };

  const handleBusinessNameChange = (event: SelectChangeEvent): void => {
    setBuisnessName(event.target.value as string);
  };

  const handleSubCategoryChange = (event: SelectChangeEvent): void => {
    setSubCategory(event.target.value as string);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value as string);
  };

  const handleAvailibityChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setAvailibility(event.target.value as string);
  };

  const submitHandler = (): void => {
    dispatch(
      AdminThunk.newReward({
        name: name,
        category: category,
        availibility: availibility,
        subCategory: subCategory,
        businessName: businessName,
      })
    );
  };

  return {
    getters: { name, category, availibility, subCategory, businessName },
    handlers: {
      handleNameChange,
      submitHandler,
      handleAvailibityChange,
      handleCategoryChange,
      handleSubCategoryChange,
      handleBusinessNameChange,
    },
  };
};
