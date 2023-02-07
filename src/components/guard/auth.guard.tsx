import { useAuth } from "context/auth.context";
import { RoutePathEnum } from "enum";
import React, { ReactElement, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IAuthGuardProps {
  children: ReactElement;
}

/**
 * @param {IAuthGuardProps} props
 * @return {ReactElement}
 */
export function GuestGuard({ children }: IAuthGuardProps): ReactElement {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const navigate = useNavigate();
  const referralcode = localStorage.getItem("referralcode");
  const businessId = localStorage.getItem("businessId");



  // const location = useLocation();

  // console.log(location?.state?.businessId, location?.state?.referralcode)

  // const url = `/listing/${businessId}`

  // useEffect(() => {

  if (isAuthenticated) {
    if (referralcode) {
      // navigate(url);
    } else {
      navigate(RoutePathEnum.HOME);
    }
    return <> </>;
  }

  // }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
