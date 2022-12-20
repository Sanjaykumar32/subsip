import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useState } from "react";

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

  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCategory(event.target.value as string);
  };

  const submitHandler = (): void => {
    dispatch(
      AdminThunk.category({
        categoryName: category,
      })
    );
  };

  return {
    getters: { category },
    handlers: { handleCategoryChange, submitHandler },
  };
};

export default CategoryController;
