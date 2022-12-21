import React from "react";
import { theme } from "theme";
import {
  Card,
  Box,
  Divider,
  Button,
  Typography,
  TypographyProps,
  useTheme,
  Link,
} from "@mui/material";
import { IAuthContext } from "context/auth.context";
import { AuthRoutePathEnum, RoutePathEnum } from "enum";
import { useNavigate } from "react-router-dom";

export const Title = ({ children, ...props }: TypographyProps) => (
  <Typography variant="h5" fontWeight={900} sx={{ mt: 2, mb: 1 }} {...props}>
    {children}
  </Typography>
);

export const Address = ({ children, ...props }: TypographyProps) => (
  <Typography
    variant="body1"
    fontWeight={900}
    color={theme.palette.grey[400]}
    {...props}
  >
    {children}
  </Typography>
);

export const Info = ({ children, ...props }: TypographyProps) => (
  <Typography variant="body1" fontWeight={600} sx={{ mt: 4, mb: 2 }} {...props}>
    {children}
  </Typography>
);

export const Subscribe = ({
  subsctibers,
  color,
  auth,
}: {
  subsctibers: number;
  color?: string;
  auth?: IAuthContext;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography
          variant="subtitle1"
          color={color || theme.palette.grey[600]}
          fontWeight={900}
        >
          {`${subsctibers}k Subscribers`}
        </Typography>
      </Box>

      <Button
        size="large"
        variant="contained"
        color="error"
        onClick={() => {
          auth?.isAuthenticated
            ? navigate(RoutePathEnum.LISTING_PRODUCT)
            : navigate(AuthRoutePathEnum.SIGN_IN);
        }}
        sx={{ fontWeight: 800, borderRadius: "24px" }}
      >
        {auth?.isAuthenticated ? "Subscribed" : "Subscribe"}
      </Button>
    </>
  );
};

export const CardFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[200],
        position: "absolute",
        bottom: 0,
      }}
    >
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{
          p: 3,
          textAlign: "center",
        }}
      >
        Claim FREE gift cards as they become available from the business listed
        above
      </Typography>
    </Box>
  );
};

export interface ILocationProps {
  name: string;
  location: string;
  description: string;
  subscribers: number;
  footer: string;
}

export function Location({
  name,
  location,
  description,
  subscribers,
}: ILocationProps) {
  return (
    <Card elevation={3} sx={{ height: "100%", position: "relative" }}>
      <Box sx={{ p: 2, fontSize: theme.typography.h5.fontSize }}>
        <Box sx={{ display: "flex" }}>
          <span style={{ fontFamily: "Bree Serif" }}> PoshSub </span>{" "}
          <Divider
            color="info"
            sx={{ m: 1 }}
            variant="middle"
            orientation="vertical"
            flexItem
          />
          <span
            style={{
              color: theme.palette.info.main,
              fontFamily: "Josefin Slab",
            }}
          >
            RWEARDS
          </span>
        </Box>
        <Title>{name}</Title>
        <Address>{location}</Address>
        <Info>{description}</Info>
        <Subscribe subsctibers={subscribers} />
      </Box>
      <CardFooter />
    </Card>
  );
}
