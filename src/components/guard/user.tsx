import { useAuth } from "context/auth.context";
import { RoutePathEnum } from "enum";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

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
  if (isAuthenticated) {
    navigate(RoutePathEnum.HOME);
    return <> </>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
