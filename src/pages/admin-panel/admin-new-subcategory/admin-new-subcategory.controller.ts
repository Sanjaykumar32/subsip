import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_SUB_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { AdminRoutePathEnum } from "enum";
import { ICategoryData } from "interface";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

interface IAddSubCategoryControllerReturns {
  getters: {
    subCategory: string;
    businessName: string;
    categoryData: ICategoryData[];
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
    const userId = localStorage.getItem("userId");
    const categoryData = useAppSelector(GET_CATEGORY);
    const naviagate = useNavigate();
    const editScreen = useLocation();
    const subCategoryData = useAppSelector(GET_SUB_CATEGORY);

    useEffect(() => {
      if (editScreen?.state?.edit === true) {
        const filter = subCategoryData?.filter((item) => {
          if (item?.iSubCategoryId === editScreen?.state?.id) {
            setSubCategory(item.vName);
          }
        });
      }
    }, [categoryData, editScreen, subCategoryData]);

    const dispatch = useAppDispatch();

    const handleCategoryChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setSubCategory(event.target.value as string);
    };

    const handleBusinessNameChange = (event: SelectChangeEvent): void => {
      setBuisnessName(event.target.value as string);
    };

    const submitHandler = async (): Promise<void> => {
      const response: any = await dispatch(
        AdminThunk.subCategory({
          categoryId: businessName,
          name: subCategory,
          addedBy: userId ? parseInt(userId) : 0,
        })
      );
      if (response.payload.data) {
        naviagate(AdminRoutePathEnum.ADMIN_SUBCATEGORY);
      }
      setSubCategory("");
      setBuisnessName("");
    };

    const category = useCallback(async () => {
      try {
        await dispatch(AdminThunk.getCategory());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      category();
    }, [category]);

    return {
      getters: { subCategory, businessName, categoryData },
      handlers: {
        submitHandler,
        handleCategoryChange,
        handleBusinessNameChange,
      },
    };
  };
