import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ICategoryData } from "interface";
import { useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";

type attributeType = {
  id: number;
  iCategoryId: number;
  vName: string;
  subCategoryName: string;
};

interface IcategoryControllerReturns {
  getters: {
    attributes: attributeType[];
  };
  handlers: {
    deleteCategorylist: (ID: number) => void;
  };
}

/**
 * category Controller
 * @return {IcategoryControllerReturns}
 */
export const CategoryController = (): IcategoryControllerReturns => {
  const categoryData = useAppSelector(GET_CATEGORY);
  const dispatch = useAppDispatch();

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

  const attributes: attributeType[] = [];

  const category = categoryData.forEach((res: ICategoryData, index: number) => {
    attributes.push({
      id: index + 1,
      iCategoryId: res.iCategoryId,
      vName: res.vName ? res.vName : "",
      subCategoryName: res.subCategoryName ? res.subCategoryName : "",
    });
  });

  async function deleteCategorylist(ID: number) {
    await dispatch(AdminThunk.deleteCategory({ categoryId: ID }));
    toast.success("Category Delete SuccessFully");
    getcategory();
  }

  return {
    getters: {
      attributes,
    },
    handlers: {
      deleteCategorylist,
    },
  };
};
