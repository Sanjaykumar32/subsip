import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_REFERRAL_LIST } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ICategoryData } from "interface";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type attributeType = {
  id: number;
  iCategoryId: number;
  vName: string;
  subCategoryName: string;
};

interface IReferralControllerReturns {
  getters: {
    attributes: attributeType[];
  };
}

/**
 * Referral  Controller
 * @return {IReferralControllerReturns}
 */
export const ReferralController = (): IReferralControllerReturns => {
  const categoryData = useAppSelector(GET_CATEGORY);
  const dispatch = useAppDispatch();
  const referralData = useAppSelector(GET_REFERRAL_LIST);




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









  const attributes: attributeType[] = [];

  const referral = categoryData.forEach((res: ICategoryData, index: number) => {
    attributes.push({
      id: index + 1,
      iCategoryId: res.iCategoryId,
      vName: res.vName ? res.vName : "",
      subCategoryName: res.subCategoryName ? res.subCategoryName : "",
    });
  });

  return {
    getters: {
      attributes,
    },
  };
};
