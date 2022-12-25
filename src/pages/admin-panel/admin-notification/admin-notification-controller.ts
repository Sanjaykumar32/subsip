import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ICategoryData } from "interface";
import { useCallback, useEffect } from "react";

type attributeType = {
  id: number;
  iCategoryId: number;
  vName: string;
};

interface IAdminNotificationControllerReturns {
  getters: {
    attributes: attributeType[];
  };
}

/**
 * category Controller
 * @return {IAdminNotificationControllerReturns}
 */
export const AdminNotificationController =
  (): IAdminNotificationControllerReturns => {
    const categoryData = useAppSelector(GET_CATEGORY);
    const dispatch = useAppDispatch();

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

    const attributes: attributeType[] = [];

    const category = categoryData.forEach(
      (res: ICategoryData, index: number) => {
        attributes.push({
          id: index + 1,
          iCategoryId: res.iCategoryId,
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
