import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useState } from "react";

interface INewReferralPriceControllerReturns {
  getters: { milestoneName: string; referralAmount: string };
  handlers: {
    handleReferralAmount: (event: SelectChangeEvent) => void;
    handleMilestoneName: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * New Referral Price Controller
 * @return {INewReferralPriceControllerReturns}
 */
export const NewReferralPriceController =
  (): INewReferralPriceControllerReturns => {
    const [milestoneName, setMileStoneName] = useState<string>("");
    const [referralAmount, setReferralAmount] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleReferralAmount = (event: SelectChangeEvent): void => {
      setReferralAmount(event.target.value as string);
    };

    const handleMilestoneName = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setMileStoneName(event.target.value as string);
    };

    const submitHandler = (): void => {
      console.log("kkksdsdskkk");
      dispatch(
        AdminThunk.newReferralPrice({
          mileStoneName: milestoneName,
          referralAmount: referralAmount,
        })
      );
    };

    return {
      getters: { milestoneName, referralAmount },
      handlers: { handleReferralAmount, handleMilestoneName, submitHandler },
    };
  };
