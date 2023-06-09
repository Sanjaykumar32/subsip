import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_RWARD_TO_WINNER_LIST } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ICategoryData } from "interface";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");

    const rewardToWinnerList = useCallback(async () => {
      try {
        await dispatch(
          AdminThunk.getRewardToWinner({
            userId: userId ? parseInt(userId) : 0,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }, [dispatch, userId]);

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
