import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import moment, { Moment } from "moment";
import { ChangeEvent, useState } from "react";

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

    const submitHandler = (): void => {
      dispatch(
        AdminThunk.newNotifyButton({
          headline: headline,
          date: date,
          description: description,
        })
      );
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
