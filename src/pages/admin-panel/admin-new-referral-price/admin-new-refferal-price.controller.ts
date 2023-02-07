import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_REFERRAL_LIST } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { AdminRoutePathEnum } from "enum";
import { ChangeEvent, useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

interface INewReferralPriceControllerReturns {
  getters: { milestoneName: string; referralAmount: number };
  handlers: {
    handleReferralAmount: (event: ChangeEvent<HTMLInputElement>) => void;
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
    const [referralAmount, setReferralAmount] = useState<number>(0);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const referralData = useAppSelector(GET_REFERRAL_LIST);

    const [editrue, setEditure] = useState<boolean>(false);


    const handleReferralAmount = (event: ChangeEvent<HTMLInputElement>): void => {
      setReferralAmount(event.target.value as unknown as number);
    };

    const handleMilestoneName = (
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      setMileStoneName(event.target.value as string);
    };





    const referralList = useCallback(async () => {
      try {
        await dispatch(AdminThunk.refferalDetail());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      referralList();
    }, [referralList]);




    const editScreen = useLocation()

    useEffect(() => {
      if (editScreen?.state?.edit === true) {
        setEditure(true)
        const filter = referralData?.filter((item: any) => {
          if (item?.iMilestoneId === editScreen?.state?.id) {
            setMileStoneName(item?.vName)
            setReferralAmount(item?.iamount)
          }
        })
      }
    }, [editScreen])



    const submitHandler = async (): Promise<void> => {

      const milestoneData = {
        name: milestoneName,
        amount: referralAmount
      }

      if (editrue == true) {
        await dispatch(AdminThunk.updateReferralPrice(
          {
            data: milestoneData,
            milestoneID: editScreen?.state?.id
              ? parseInt(editScreen?.state?.id)
              : 0,
          })
        );
        toast.success("Referral Updated Successfully")
        navigate(AdminRoutePathEnum.ADMIN_REFERRALS);
      } else {
        await dispatch(AdminThunk.newReferralPrice(milestoneData)
        );
        toast.success("Referral Created Successfully")
        navigate(AdminRoutePathEnum.ADMIN_REFERRALS);
      }


      // navigate(AdminRoutePathEnum.ADMIN_LISTING);





    };

    return {
      getters: { milestoneName, referralAmount },
      handlers: { handleReferralAmount, handleMilestoneName, submitHandler },
    };
  };
