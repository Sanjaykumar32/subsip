import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { AdminRoutePathEnum } from "enum";
import { ChangeEvent, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "data";
import { GET_CATEGORY } from "data/selectors";

interface ICategoryControllerReturns {
  getters: { category: string };
  handlers: {
    handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * Sign In Controller
 * @return {ICategoryControllerReturns}
 */
const CategoryController = (): ICategoryControllerReturns => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState<any>("");
  const userId = localStorage.getItem("userId");
  const editScreen = useLocation();
  const categoryData = useAppSelector(GET_CATEGORY);

  useEffect(() => {
    if (editScreen?.state?.edit === true) {
      const filter = categoryData?.filter((item) => {
        if (item?.iCategoryId === editScreen?.state?.id) {
          setCategory(item.vName);
        }
      });
    }
  }, [categoryData, editScreen]);

  const submitHandler = async (): Promise<void> => {
    if (editScreen?.state?.edit === true) {
      // Edit category
      const response: any = await dispatch(
        AdminThunk.updateCategory({
          name: category,
          categoryId: editScreen?.state?.id
            ? parseInt(editScreen?.state?.id)
            : 0,
        })
      );

      if (response.payload.data) {
        navigate(AdminRoutePathEnum.ADMIN_CATEGORY);
      }
      setCategory("");
    } else {
      // create category
      const response: any = await dispatch(
        AdminThunk.category({
          name: category,
          addedBy: userId ? parseInt(userId) : 0,
        })
      );
      if (response.payload.data) {
        navigate(AdminRoutePathEnum.ADMIN_CATEGORY);
      }
      setCategory("");
    }
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCategory(event.target.value as string);
  };

  return {
    getters: { category },
    handlers: { handleCategoryChange, submitHandler },
  };
};

export default CategoryController;
