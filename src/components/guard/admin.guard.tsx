import { useAuth } from "context/auth.context";
import { useAppSelector } from "data";
import { GET_ACCOUNT_TYPE } from "data/selectors";
import { AccountTypeEnum, RoutePathEnum } from "enum";
import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

interface IAuthGuardProps {
  children: ReactElement;
}

/**
 * @param {IAuthGuardProps} props
 * @return {ReactElement}
 */
export function AdminGuard({ children }: IAuthGuardProps): ReactElement {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const navigate = useNavigate();
  const accountType = useAppSelector(GET_ACCOUNT_TYPE);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (userId === "4") {
      AccountTypeEnum.ADMIN
    } else {
      navigate(RoutePathEnum.HOME);
    }

  }, [navigate, isAuthenticated, userId]);



  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
