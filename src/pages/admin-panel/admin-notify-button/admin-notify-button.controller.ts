import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import moment, { Moment } from "moment";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";
import { toast } from "react-hot-toast";


interface INewNotifyButtonControllerReturns {
  getters: {
    headline: string;
    date: Moment;
    description: string;
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (date: Moment | null) => void;
    submitHandler: () => void;
  };
}

/**
 * New Reward Controller
 * @return {INewNotifyButtonControllerReturns}
 */
export const NewNotifyButtonController =
  (): INewNotifyButtonControllerReturns => {
    const [headline, setHeadline] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<Moment>(moment());
    const dispatch = useAppDispatch();
    const NotifyScreen = useLocation();
    const navigate = useNavigate();


    const userID = NotifyScreen?.state?.id

    console.log(userID, 'NotifyScreen')


    const handleDateChange = (date: Moment | null): void => {
      if (!date) {
        return;
      }
      setDate(date);
    };

    const handleHeadlineChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setHeadline(event.target.value as string);
    };

    const handleDescriptionChange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setDescription(event.target.value as string);
    };

    const submitHandler = async () => {
      const res = await dispatch(
        AdminThunk.newNotifyButton({
          headline: headline,
          date: date,
          description: description,
          userIds: userID
        })
      );

      console.log(res, 'res')

      navigate(AdminRoutePathEnum.ADMIN_SUBSCRIBERS)

      toast.success('Notification Add SuccessFull')

    };

    return {
      getters: { headline, date, description },
      handlers: {
        handleHeadlineChange,
        submitHandler,
        handleDescriptionChange,
        handleDateChange,
      },
    };
  };
