import { useAppDispatch, useAppSelector } from "data";
import { GET_SUB_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ISubCategoryData } from "interface";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

type attributeType = {
  id: number;
  vName: string;
  Actions: any;
};

interface ISubcategoryControllerReturns {
  getters: {
    attributes: attributeType[];
    id: string | null;
  };
  handlers: { deleteSubCategorylist: (ID: number) => void };
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
      await dispatch(AdminThunk.getSubCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getSubCategory();
  }, [getSubCategory]);

  const attributes: attributeType[] = [];

  const [searchParams] = useSearchParams();

  const id = searchParams.get("category");

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const filteredSubCategory = categoryData?.filter((item) => {
      return item.iCategoryId == id;
    });
    setData(filteredSubCategory);
  }, [categoryData, id]);

  async function deleteSubCategorylist(ID: number): Promise<void> {
    await dispatch(AdminThunk.deleteSubCategory({ subCategoryId: ID }));
    toast.success("Category Delete SuccessFully");
    getSubCategory();
  }

  const category = data.forEach((res: ISubCategoryData, index: number) => {
    attributes.push({
      id: index + 1,
      vName: res.vName ? res.vName : "",
      Actions: ["Edit", "Delete", res?.iSubCategoryId],
    });
  });

  return {
    getters: {
      attributes,
      id,
    },
    handlers: { deleteSubCategorylist },
  };
};
