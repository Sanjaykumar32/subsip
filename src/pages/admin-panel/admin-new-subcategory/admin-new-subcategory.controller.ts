import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useState } from "react";

interface IAddSubCategoryControllerReturns {
  getters: {
    subCategory: string;
    businessName: string;
  };
  handlers: {
    handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBusinessNameChange: (event: SelectChangeEvent) => void;
    submitHandler: () => void;
  };
}

/**
 * Add Sub Category Controller
 * @return {IAddSubCategoryControllerReturns}
 */
export const AddSubCategoryController =
  (): IAddSubCategoryControllerReturns => {
    const [subCategory, setSubCategory] = useState<string>("");
    const [businessName, setBuisnessName] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleCategoryChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setSubCategory(event.target.value as string);
    };

    const handleBusinessNameChange = (event: SelectChangeEvent): void => {
      setBuisnessName(event.target.value as string);
    };

    const submitHandler = (): void => {
      dispatch(
        AdminThunk.subCategory({
          businessCategory: businessName,
          subCategoryName: subCategory,
        })
      );
    };

    return {
      getters: { subCategory, businessName },
      handlers: {
        submitHandler,
        handleCategoryChange,
        handleBusinessNameChange,
      },
    };
  };
