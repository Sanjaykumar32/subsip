import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { AdminRoutePathEnum } from "enum";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const naviagate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const userId = sessionStorage.getItem("userId");

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCategory(event.target.value as string);
  };

  const submitHandler = async (): Promise<void> => {
    const response: any = await dispatch(
      AdminThunk.category({
        name: category,
        addedBy: userId ? parseInt(userId) : 0,
      })
    );
    console.log(response.payload, "response");

    if (response.payload.data) {
      naviagate(AdminRoutePathEnum.ADMIN_CATEGORY);
    }
    setCategory("");
  };

  return {
    getters: { category },
    handlers: { handleCategoryChange, submitHandler },
  };
};

export default CategoryController;
