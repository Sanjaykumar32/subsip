import React, { useEffect, useState, useCallback } from "react";
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
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { IBusiness } from "interface";
import { useAppDispatch, useAppSelector } from "data";
import { UserThunk } from "data/thunk/user.thunk";
import { GET_ALL_SUBSCRIBER_OF_BUSINESS, GET_BUSINESS } from "data/selectors";
import toast from "react-hot-toast";
import { AdminThunk } from "data/thunk/admin.thunk";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

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
  <Typography variant="body1" fontWeight={600} sx={{ mt: 2, mb: 2 }} {...props}>
    {children}
  </Typography>
);

export const Subscribe = ({
  subsctibers,
  color,
  auth,
  businessId,
}: {
  subsctibers: number;
  color?: string;
  auth?: IAuthContext;
  businessId: any
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const location = useParams();
  const [searchParams] = useSearchParams();
  const referralcode = searchParams.get("referralCode");
 
  const isSubscribed = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);
  const [showButton, setButton] = useState<boolean>(false);
  const bussinessByName = useAppSelector(GET_BUSINESS);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  useEffect(() => {
    const getdata = isSubscribed.filter(
      (item: any) => item?.iAdminId == userId
    )[0];

    if (getdata === undefined) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [isSubscribed]);



  const allBusiness = useCallback(async () => {
    try {
      await dispatch(UserThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const allsubscriberOfBussinesss = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.allSubscriberOfBussiness({
          userId: userId ? parseInt(userId) : 0,
          businessId: businessId ? businessId : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [businessId, dispatch, userId]);

  useEffect(() => {
    allsubscriberOfBussinesss();
  }, [allsubscriberOfBussinesss]);

  async function onButtonClick(): Promise<void> {
    localStorage.setItem("referralcode", referralcode ? referralcode : "");
    localStorage.setItem("businessId", businessId ? businessId : "");
    if (auth?.isAuthenticated) {
      try {
        const response = await dispatch(
          UserThunk.addSubscriberToBusiness({
            businessId: businessId ? businessId : 0,
            userId: userId ? parseInt(userId) : "",
            referredCode: referralcode,
          })
        );
 
        allsubscriberOfBussinesss();
        allBusiness();
        navigate("");
    
        toast.success("Subscribed Successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/auth/sign-in");
    }
    setButton(true);
  }

  const handleUnsub = async () => {
    if (auth?.isAuthenticated) {
    await dispatch(
      UserThunk.UNSubscriberToBusiness({
        businessId: businessId ? "" + businessId : "0",
      })
    );
    // setButton(false);
    allsubscriberOfBussinesss();
    allBusiness();
    toast.success("Unsubscribed Successfully");
    }
  };

  return (
    <div
      className={`${
        isMobile ? "flex justify-between h-[70px]  items-center" : ""
      }`}
    >
      <Box sx={{ my: 3 }}>
        <Typography
          variant="subtitle1"
          color={color || theme.palette.grey[600]}
          fontWeight={900}
        >
          {`${subsctibers} Subscribers`}
        </Typography>
      </Box>

      {!showButton ? (
        <Button
          size="large"
          variant="contained"
          color="inherit"
          sx={{ fontWeight: 800, borderRadius: "24px" }}
          onClick={() => handleUnsub()}
        >
          Unsubscribe
        </Button>
      ) : (
        <Button
          size="large"
          variant="contained"
          className="!bg-[#09292b] !text-white"
          onClick={() => {
            onButtonClick();
          }}
          sx={{ fontWeight: 800, borderRadius: "24px" }}
        >
          Subscribe
        </Button>
      )}
    </div>
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
  subscriberCount,
  vTagLine,
  vPreview,
  iBusinessId,
}: IBusiness) {
  const auth = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={3}
      sx={{
        // height: "83%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className=" md:h-[83%] h-full "
    >
      <Box sx={{ p: 2, fontSize: theme.typography.h5.fontSize }}>
        {!isMobile && (
          <>
            <Box sx={{ display: "flex" }}>
              <span style={{ fontFamily: "Bree Serif" }}> Subsip </span>
              <Divider
                color="info"
                sx={{ m: 1 }}
                variant="middle"
                orientation="vertical"
                flexItem
              />
              <span
                style={{
                  color: "#09292b",
                  fontFamily: "Josefin Slab",
                }}
              >
                REWARDS
              </span>
            </Box>
            <Title>{vName}</Title>
            <Address>{vLocation}</Address>
            <Info>{vPreview}</Info>
          </>
        )}

        <Subscribe subsctibers={subscriberCount} auth={auth} businessId={iBusinessId}/>
      </Box>

      <CardFooter vTagLine={vTagLine} />
    </Card>
  );
}
