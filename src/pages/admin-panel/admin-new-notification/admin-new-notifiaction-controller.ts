import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

interface INewNotificationButtonControllerReturns {
  getters: {
    headline: string;
    date: Dayjs | null;
    description: string;
    subCategory: string;
    businessName: string;
    category: string;
    businessLocation: string;
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (ate: Dayjs | null) => void;
    handleCategoryChange: (event: SelectChangeEvent) => void;
    handleSubCategoryChange: (event: SelectChangeEvent) => void;
    handleBusinessNameChange: (event: SelectChangeEvent) => void;
    handleBusinessLocationhange: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * New Reward Controller
 * @return {INewNotificationButtonControllerReturns}
 */
export const NewNotificationButtonController =
  (): INewNotificationButtonControllerReturns => {
    const [headline, setHeadline] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [category, setCategory] = useState<string>("");
    const [businessName, setBuisnessName] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");
    const [businessLocation, setBusinessLocation] = useState<string>("");

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

    const handleCategoryChange = (event: SelectChangeEvent): void => {
      setCategory(event.target.value as string);
    };

    const handleBusinessNameChange = (event: SelectChangeEvent): void => {
      setBuisnessName(event.target.value as string);
    };

    const handleSubCategoryChange = (event: SelectChangeEvent): void => {
      setSubCategory(event.target.value as string);
    };

    const handleBusinessLocationhange = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setBusinessLocation(event.target.value as string);
    };

    const submitHandler = (): void => {
      dispatch(
        AdminThunk.newNotification({
          headline: headline,
          date: date,
          description: description,
          subCategory: subCategory,
          businessName: businessName,
          category: category,
          businessLocation: businessLocation,
        })
      );
    };

    return {
      getters: {
        headline,
        date,
        description,
        subCategory,
        businessName,
        category,
        businessLocation,
      },
      handlers: {
        handleHeadlineChange,
        submitHandler,
        handleDescriptionChange,
        handleDateChange,
        handleCategoryChange,
        handleSubCategoryChange,
        handleBusinessNameChange,
        handleBusinessLocationhange,
      },
    };
  };
