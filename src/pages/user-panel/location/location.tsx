import React, { useCallback, useEffect, useState } from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Card, Grid, Typography } from "@mui/material";
import {
  Location,
  Address,
  Info,
  Title,
} from "components/location/location-card";
import {
  GET_ALL_SUBSCRIBER_OF_BUSINESS,
  GET_BUSINESS,
  GET_REFFERRAL_CODE,
} from "data/selectors";
import { useAppDispatch, useAppSelector } from "data";
import { IBusiness } from "interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ResponsiveDialog from "./component/referral";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAuth } from "context/auth.context";
import { useNavigate } from "react-router-dom";
import { RoutePathEnum, AuthRoutePathEnum } from "enum";
import { useLocation } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

export function LocationPage() {
  const theme = useTheme();
  const bussinessByName = useAppSelector(GET_BUSINESS);
  const [open, setOpen] = React.useState(false);
  const userId = localStorage.getItem("userId");
  const refferralCode = useAppSelector(GET_REFFERRAL_CODE);
  const locations = useLocation();
  const dispatch = useAppDispatch();
  const businessNames = locations.pathname.split("/")[2];
  const [name, setName] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const navigate = useNavigate();

  const businessName:any = businessNames.toString().split('-').join(" ")

  async function getDatalist() {
    if (businessName) {
      await dispatch(
        UserThunk.business( isNaN(businessName) ? { businessName: businessName} : {businessId : businessName})
      );
    }
  }

  useEffect(() => {
    getDatalist();
  }, [businessName]);

  const handleClickOpen = async (el: any) => {
   if(isAuthenticated){
    try {
      await dispatch(
        AdminThunk.refferralCode({ userId: userId ? userId : "" })
      );
    } catch (error) {
      console.log(error);
    }
    setOpen(true);
    setName(el);
  }else{
    navigate('/auth/sign-in')
  }

  };
  const businessId = bussinessByName?.[0]?.iBusinessId

  const allsubscriberOfBussinesss = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.allSubscriberOfBussiness({
          userId: userId ? parseInt(userId) : 0,
          businessId: businessId ? parseInt(businessId)  : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [businessId, dispatch, userId]);

  useEffect(() => {
    allsubscriberOfBussinesss();
  }, [allsubscriberOfBussinesss]);


 const businessIds = locations?.state?.businessId 

 

  const handleClose = () => {
    setOpen(false);
  };

  
  const filterName = bussinessByName.filter((el:any)=>{
       return el?.iBusinessId == businessName 
  })


  const filterBusiness = bussinessByName?.filter((el: {
    iBusinessId: any; vName: { toString: () => string; }; 
})=>{
    return Object.values(
         el?.vName?.toString()?.replaceAll(/\s/g, "")?.toLowerCase()
    )
      .join("")
      .toLowerCase()
      .includes(isNaN(businessName) ? businessName.toString()
      ?.replaceAll(/\s/g, "")
      .toLowerCase() : filterName[0]?.vName.toString()
      ?.replaceAll(/\s/g, "")
      .toLowerCase()
              
      );
  })


  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      {!isMobile && (
        <>
          {filterBusiness?.map((res: IBusiness, index: number) => (
            <div key={index}>
              <Title>{res?.vName}</Title>
              <Address>{res?.vLocation}</Address>
              <Info>{res?.tDescription}</Info>

              <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                  {/* {bussinessByName.map((res: IBusiness, index: number) => ( */}
                  <Card sx={{ width: "100%", maxHeight: "500px" }}>
                    <img
                      alt={res.vImage}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={"https://api.subsip.com/" + res.vImage}
                    />
                  </Card>
                  {/* ))} */}
                  <span className="text-[14px] py-[20px] flex font-[400] text-[#252525]">
                    {res?.vBodyDescription}
                  </span>
                </Grid>

                <Grid item sm={12} md={4} sx={{ px: 2, mt: "-35px" }}>
                  
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingBottom: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ mr: 2 }}
                        onClick={() => handleClickOpen(res?.vName)}
                        className=" cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          style={{ marginRight: 4 }}
                        />
                        Referral
                      </Typography>
                    </Box>
                  
                  {filterBusiness.map((res: IBusiness, index: number) => {
                    return <Location {...res} key={index} />;
                  })}
                </Grid>
              </Grid>
              {open  &&  (
                <ResponsiveDialog
                  title={name}
                  open={open}
                  handleClose={handleClose}
                  refferralCode={refferralCode}
                />
              )}
            </div>
          ))}
        </>
      )}

      {isMobile && (
        <>
          {filterBusiness.map((res: IBusiness, index: number) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <Title>{res?.vName}</Title>
                  <Address>{res?.vLocation}</Address>
                </div>

               
                  <Box
                    className=" items-end text-center"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingBottom: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ mr: 1 }}
                      onClick={() => handleClickOpen(res?.vName)}
                      className=" cursor-pointer flex align-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginRight: 4 }}
                      />
                      Referral
                    </Typography>
                  </Box>
                
              </div>
              <Info>{res?.tDescription}</Info>

              <Grid container spacing={2}>
                <Grid item sm={12} md={8} className="w-full ">
                  {/* {bussinessByName.map((res: IBusiness, index: number) => ( */}
                  <Card sx={{ width: "100%", maxHeight: "500px" }}>
                    <img
                      className="h-[250px]"
                      alt={res.vImage}
                      style={{
                        width: "100%",
                        // height: "auto",
                        objectFit: "cover",
                      }}
                      src={"https://api.subsip.com/" + res.vImage}
                    />
                  </Card>

                  <Grid item sm={12} md={4}>
                    {filterBusiness.map((res: IBusiness, index: number) => {
                      return <Location {...res} key={index} />;
                    })}

                    <span className="text-[14px] py-[10px] flex font-[400] text-[#252525]">
                      {res?.vBodyDescription}
                    </span>
                  </Grid>
                </Grid>
              </Grid>
              {open && (
                <ResponsiveDialog
                  title={name}
                  open={open}
                  handleClose={handleClose}
                  refferralCode={refferralCode}
                />
              )}
            </div>
          ))}
        </>
      )}
    </Container>
  );
}
