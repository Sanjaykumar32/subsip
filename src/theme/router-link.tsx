import React, { forwardRef } from "react";
import { LinkProps } from "@mui/material/Link";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ThemeOptions } from "@mui/material";

type LinkBehaviorType = Omit<RouterLinkProps, "to"> & {
  href: RouterLinkProps["to"];
};

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorType>(
  (props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

LinkBehavior.displayName = "LinkBehaviour";

export const LinkComponent: ThemeOptions["components"] = {
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
    styleOverrides: {
      root: ({ theme }) => ({
        textDecoration: "none",
        fontWeight: 500,
        color: theme.palette.secondary.main,
      }),
    },
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
};
