import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_SUB_CATEGORY, GET_BUSINESS } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface INewRewardControllerReturns {
  getters: {
    name: string;
    category: string;
    availibility: string;
    subCategory: string;
    businessName: string;
    businessData: IBusiness[];
    categoryData: ICategoryData[];
    subCategoryData: ISubCategoryData[];
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
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const businessData = useAppSelector(GET_BUSINESS);

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
      name,
      category,
      availibility,
      subCategory,
      businessName,
      businessData,
      categoryData,
      subCategoryData,
    },
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
