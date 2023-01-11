import React, { useState } from "react";
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
import { IAuthContext, useAuth } from "context/auth.context";
import { AuthRoutePathEnum, RoutePathEnum } from "enum";
import { useNavigate, useParams } from "react-router-dom";
import { IBusiness } from "interface";
import { useAppDispatch } from "data";
import { UserThunk } from "data/thunk/user.thunk";

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
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const location = useParams();
  const businessId = location.id;
  const referralcode = localStorage.getItem("referralCode");
  const [disableButton, setDisableButton] = useState<boolean>(false);

  async function onButtonClick(): Promise<void> {
    if (auth?.isAuthenticated) {
      try {
        const response = await dispatch(
          UserThunk.addSubscriberToBusiness({
            businessId: businessId ? parseInt(businessId) : 0,
            userId: userId ? userId : "",
            referredCode: referralcode,
          })
        );
        setDisableButton(true);
        console.log(response, "response");
        navigate(RoutePathEnum.LISTING_PRODUCT);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate(AuthRoutePathEnum.SIGN_IN);
    }
  }
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

      {!disableButton ? (
        <Button
          size="large"
          variant="contained"
          color="error"
          onClick={() => {
            onButtonClick();
          }}
          sx={{ fontWeight: 800, borderRadius: "24px" }}
        >
          Subscribe Now
        </Button>
      ) : (
        <Button
          size="large"
          variant="contained"
          color="error"
          onClick={() => {
            onButtonClick();
          }}
          sx={{ fontWeight: 800, borderRadius: "24px" }}
        >
          Subscribed
        </Button>
      )}
    </>
  );
};

export const CardFooter = (props: { vTagLine: string }) => {
  const { vTagLine } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[200],
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
        {vTagLine}
      </Typography>
    </Box>
  );
};

export function Location({
  vName,
  vLocation,
  tDescription,
  subscriberCount,
  vTagLine,
}: IBusiness) {
  const auth = useAuth();
  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ p: 2, fontSize: theme.typography.h5.fontSize }}>
        <Box sx={{ display: "flex" }}>
          <span style={{ fontFamily: "Bree Serif" }}> PoshSub </span>
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
        <Title>{vName}</Title>
        <Address>{vLocation}</Address>
        <Info>{tDescription}</Info>
        <Subscribe subsctibers={subscriberCount} auth={auth} />
      </Box>
      <CardFooter vTagLine={vTagLine} />
    </Card>
  );
}
