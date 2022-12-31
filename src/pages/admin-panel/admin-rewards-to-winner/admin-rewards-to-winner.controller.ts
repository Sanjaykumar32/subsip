import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_RWARD_TO_WINNER_LIST } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ICategoryData } from "interface";
import { useCallback, useEffect } from "react";

type attributeType = {
  id: number;
  iCategoryId: number;
  vName: string;
  subCategoryName: string;
};

interface IRewardToWinnerControllerReturns {
  getters: {
    attributes: attributeType[];
  };
}

/**
 * Referral  Controller
 * @return {IRewardToWinnerControllerReturns}
 */
export const RewardToWinnerController =
  (): IRewardToWinnerControllerReturns => {
    const categoryData = useAppSelector(GET_CATEGORY);
    const dispatch = useAppDispatch();
    const rewardToWinner = useAppSelector(GET_RWARD_TO_WINNER_LIST);

    const rewardToWinnerList = useCallback(async () => {
      try {
        dispatch(AdminThunk.getRewardToWinner());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);

    useEffect(() => {
      rewardToWinnerList();
    }, [rewardToWinnerList]);

    const attributes: attributeType[] = [];

    const referral = categoryData.forEach(
      (res: ICategoryData, index: number) => {
        attributes.push({
          id: index + 1,
          iCategoryId: res.iCategoryId,
          vName: res.vName ? res.vName : "",
          subCategoryName: res.subCategoryName ? res.subCategoryName : "",
        });
      }
    );

    return {
      getters: {
        attributes,
      },
    };
  };
