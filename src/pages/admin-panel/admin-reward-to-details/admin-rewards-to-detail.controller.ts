import { useAppDispatch, useAppSelector } from "data";
import { GET_NOTIFICATION } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useCallback, useEffect } from "react";

type attributeType = {
  id: number;
  iCategoryId: number;
  vName: string;
};

interface IAdminNotificationControllerReturns {
  getters: {
    attributes: attributeType[];
    notificationData: any;
  };
}

/**
 * category Controller
 * @return {IAdminNotificationControllerReturns}
 */
export const AdminNotificationController =
  (): IAdminNotificationControllerReturns => {
    const notificationData = useAppSelector(GET_NOTIFICATION);
    const dispatch = useAppDispatch();

    const getReward = useCallback(async () => {
      try {
        await dispatch(AdminThunk.notificationList());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      getReward();
    }, [getReward]);

    const attributes: attributeType[] = [];

    const category = notificationData.forEach((res: any, index: number) => {
      attributes.push({
        id: index + 1,
        iCategoryId: res.iCategoryId,
        vName: res.vName ? res.vName : "",
      });
    });

    return {
      getters: {
        attributes,
        notificationData,
      },
    };
  };
