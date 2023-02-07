import { useAuth } from "context/auth.context";
import { RoutePathEnum } from "enum";
import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthGuardProps {
  children: ReactElement;
}

/**
 * @param {IAuthGuardProps} props
 * @return {ReactElement}
 */
export function GuestGuard({ children }: IAuthGuardProps) {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const navigate = useNavigate();
  const referralcode = localStorage.getItem("referralcode");
  const businessId = localStorage.getItem("businessId");

  useEffect(() => {
    if (isAuthenticated) {
      if (referralcode) {
        navigate(`/listing/${businessId}`);
      } else {
        navigate(RoutePathEnum.HOME);
      }
    }



  }, [businessId, isAuthenticated, navigate, referralcode]);

  if (isAuthenticated) {
    navigate(RoutePathEnum.HOME);
    return <> </>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
