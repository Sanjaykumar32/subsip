import { useAppDispatch, useAppSelector } from "data";
import { GET_NOTIFICATION } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { INotificationdata } from "interface";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

interface IAdminNotificationControllerReturns {
  getters: {
    notificationData: INotificationdata[];
  };
  handlers: {
    deleteNotification: (ID: number) => Promise<void>;
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

    const getNotification = useCallback(async () => {
      try {
        await dispatch(AdminThunk.notificationList());
      } catch (error) {
        console.log(error, 'this is res ');
      }
    }, [dispatch]);

    useEffect(() => {
      getNotification();
    }, [getNotification]);

    async function deleteNotification(ID: number): Promise<void> {
      await dispatch(AdminThunk.deleteNotification({ notificationId: ID }));
      getNotification();
      toast.success("Notification Deleted SuccessFully");
    }

    return {
      getters: {
        notificationData,
      },
      handlers: {
        deleteNotification,
      },
    };
  };
