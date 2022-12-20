import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

interface INewNotifyButtonControllerReturns {
  getters: {
    headline: string;
    date: Dayjs | null;
    description: string;
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (ate: Dayjs | null) => void;
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

    const [date, setDate] = useState<Dayjs | null>(dayjs());

    const dispatch = useAppDispatch();

    const handleDateChange = (date: Dayjs | null): void => {
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
