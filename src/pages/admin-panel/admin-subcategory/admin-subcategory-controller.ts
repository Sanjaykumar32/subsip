import { useAppDispatch, useAppSelector } from "data";
import { GET_SUB_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ISubCategoryData } from "interface";
import { useCallback, useEffect } from "react";

type attributeType = {
  id: number;
  vName: string;
};

interface ISubcategoryControllerReturns {
  getters: {
    attributes: attributeType[];
  };
}

/**
 * category Controller
 * @return {ISubcategoryControllerReturns}
 */
export const SubCategoryController = (): ISubcategoryControllerReturns => {
  const categoryData = useAppSelector(GET_SUB_CATEGORY);
  const dispatch = useAppDispatch();

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

  const attributes: attributeType[] = [];

  const category = categoryData.forEach(
    (res: ISubCategoryData, index: number) => {
      attributes.push({
        id: index + 1,
        vName: res.vName ? res.vName : "",
      });
    }
  );

  return {
    getters: {
      attributes,
    },
  };
};
