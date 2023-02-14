import React, { useEffect, useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GET_BUSINESS, GET_CATEGORY, GET_SUB_CATEGORY } from "data/selectors";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useNavigate, useLocation, useAsyncError } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";
import { useAuth } from "context/auth.context";
import { AuthRoutePathEnum } from "enum";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListIcon from "@mui/icons-material/List";
import toast from "react-hot-toast";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";

export function ClickOnCategory() {
  const [ids, setId] = useState<any>();
  const [subcatIdss, setSubCatIdData] = useState<any>();
  const auth = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeCate, setActiveCate] = useState<any>(false);
  const location = useLocation();
  const getCateID = location.pathname.split("/")[2];
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const userId = localStorage.getItem("userId");
  const dispatch = useAppDispatch();
  console.log(location?.state?.id , 'location')

  const pathSerchValue = location.search.slice(1, 25);

  const pathName = location?.pathname?.split("/")?.[1];

  console.log(pathSerchValue , 'path serch')

  const getcategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const filteredSubCategory = subCategoryData?.filter((item) => {
    return item?.iCategoryId == getCateID;
  });

  const getSubCategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getSubCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getSubCategory();
  }, [getSubCategory]);

  useEffect(() => {
    getcategory();
  }, [getcategory]);

  const handleList = (id: any) => {
    // naviagate(`/listing?${id?.iCategoryId}`);
    setId(id);
    // setActiveCate(id?.iCategoryId)
  };

  const handleSubList = (id: any) => {
    // naviagate(`/listing?${id?.iCategoryId}`);
    setSubCatIdData(id);
    // setActiveCate(id?.iCategoryId)
  };

  const businessData = useAppSelector(GET_BUSINESS);
  const [state, setState] = React.useState(false);
  const [sortValue, setSortValue] = useState("Highest");

  const allBusiness = useCallback(async () => {
    try {
      await dispatch(UserThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allBusiness();
  }, [allBusiness]);

  const sortSubscriberWise = businessData?.slice()?.sort((a, b): any => {
    if (sortValue == "Highest") {
      return b.subscriberCount - a.subscriberCount;
    } else if (sortValue == "Lowest") {
      return a.subscriberCount - b.subscriberCount;
    }
  });

  const listFilter = sortSubscriberWise?.filter(
    (el: { vLocation: any; vName: { toString: () => string } }) => {
      return Object.values(
        pathName == "category"
          ? el?.vLocation?.replaceAll(/\s/g, "")?.toString().toLowerCase()
          : el?.vName?.toString()?.replaceAll(/\s/g, "")?.toLowerCase()
      )
        .join("")
        .toLowerCase()
        .includes(
          pathName == "category"
            ? pathSerchValue.toString()?.replaceAll(/\s/g, "")?.toLowerCase()
            : location.search
                .toString()
                .slice(1, 19)
                ?.replaceAll(/\s/g, "")
                .toLowerCase()
        );
    }
  );

  useEffect(() => {
    if (getCateID) {
      handleList(Number(getCateID));
      setActiveCate(Number(getCateID));
    }
  }, [getCateID, location]);
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState<any>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    categoryData
      .filter((el) => el.iCategoryId === activeCate)
      .map((res) => {
        setExpanded(res.vName);
      });
  }, [activeCate, categoryData, getCateID]);

  const toggleDrawer = () => {
    setState(true);
  };

  const toggleDrawerClose = () => {
    setState(false);
  };

  async function SubcribeBtn(id: any): Promise<void> {
    // !auth?.isAuthenticated && navigate(AuthRoutePathEnum.SIGN_IN);
    try {
      await dispatch(
        UserThunk.addSubscriberToBusiness({
          businessId: id,
          userId: userId ? userId : "",
          referredCode: null,
        })
      );

      allBusiness();
      toast.success("Subscribed  Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  const handleUnsub = async (id: any) => {
    await dispatch(
      UserThunk.UNSubscriberToBusiness({
        businessId: id ? "" + id : "0",
      })
    );
    allBusiness();
    toast.success("Unsubscribed  Successfully");
  };

  async function onImageClick(item: any): Promise<void> {
    try {
      const response: any = await dispatch(
        UserThunk.business({ businessId: item.iBusinessId })
      );
      if (response.payload.data.length > 0) {
        navigate(`/listing/${item.vName.replace(/\s+/g, "-")}`, {
          state: { businessId: item.iBusinessId },
        });
      } else {
        console.log("nodata");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSort = (e: any) => {
    setSortValue(e.target.value);
  };

  return (
    <Container maxWidth={false} sx={{ p: 4 }}>
      <Grid container>
        {/* <------------------------ Mobile view listting cagegory ---------------> */}

        {isMobile && (
          <div>
            <React.Fragment>
              <Button onClick={toggleDrawer} className="py-5">
                <ListIcon />
              </Button>
              <SwipeableDrawer
                open={state}
                onClose={toggleDrawerClose}
                onOpen={toggleDrawer}
              >
                <Box sx={{ width: 250 }} className="mt-40" role="presentation">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    className="py-5 text-[16px] pl-2 font-normal"
                  >
                    Listings by subcategory
                  </Typography>

                  <div>
                    {categoryData.map((item, index) => (
                      <Link href={`/category/${item?.iCategoryId}`} key={index}>
                        {item && item?.vName && (
                          <Accordion
                            expanded={expanded === item.vName}
                            onChange={handleChange(item.vName)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              className={`font-normal text-[16px] leading-[24px] min-h-[50px] text-[#434d59] cursor-pointer nan ${
                                activeCate === item?.iCategoryId
                                  ? " activeCate"
                                  : ""
                              }  `}
                              onClick={() => {
                                handleList(item?.iCategoryId),
                                  handleSubList(null);
                                setActiveCate(item?.iCategoryId);
                              }}
                            >
                              {item?.vName}
                            </AccordionSummary>

                            <AccordionDetails className="!p-0">
                              {filteredSubCategory.length > 0 ? (
                                filteredSubCategory.map(
                                  (res: any, i: number) => (
                                    <Link
                                      key={i}
                                      onClick={() =>
                                        handleSubList(res?.iSubCategoryId)
                                      }
                                    >
                                      <div
                                        className={
                                          subcatIdss == res.iSubCategoryId
                                            ? "bg-[#c9c8c8]"
                                            : ""
                                        }
                                      >
                                        <Typography
                                          onClick={toggleDrawerClose}
                                          className="text-[#252525] !py-[10px] hover:bg-[#c9c8c8]"
                                          key={i}
                                        >
                                          <div className="flex items-center gap-1">
                                            <span className="pl-1 ">
                                              <AccountTreeTwoToneIcon className="!h-[20px] !w-[20px]" />
                                            </span>
                                            <span> {res.vName}</span>
                                          </div>
                                        </Typography>
                                      </div>
                                    </Link>
                                  )
                                )
                              ) : (
                                <Link>
                                  <Typography className="text-[#252525] p-[10px]">
                                    No Sub category Here
                                  </Typography>
                                </Link>
                              )}
                            </AccordionDetails>
                          </Accordion>
                        )}
                      </Link>
                    ))}
                  </div>
                  <Divider />
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </div>
        )}

        {/* <------------------------ Desktop view listting cagegory ---------------> */}
        {!isMobile && (
          <Grid item xs={12} md={2.1} sx={{ paddingRight: "20px" }}>
            <Box sx={{ overflow: "auto", my: 1 }} className="pl-[18px]">
              <Typography variant="body1" fontWeight="600" className="py-5">
                Listings by Category
              </Typography>

              <div>
                {categoryData.map((item, index) => (
                  <Link href={`/category/${item?.iCategoryId}`} key={index}>
                    {item && item?.vName && (
                      <Accordion
                        expanded={expanded === item.vName}
                        onChange={handleChange(item.vName)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id={item.vName}
                          className={`font-normal text-[16px] leading-[24px] min-h-[50px] text-[#434d59] cursor-pointer nan ${
                            activeCate === item?.iCategoryId
                              ? " activeCate"
                              : ""
                          }  `}
                          onClick={() => {
                            handleSubList(null);
                            setActiveCate(item?.iCategoryId);
                          }}
                        >
                          {item?.vName}
                        </AccordionSummary>

                        <AccordionDetails className="!p-0">
                          {filteredSubCategory.length > 0 ? (
                            filteredSubCategory.map((res: any, i: number) => (
                              <Link
                                key={i}
                                onClick={() =>
                                  handleSubList(res?.iSubCategoryId)
                                }
                              >
                                <div
                                  className={
                                    subcatIdss == res.iSubCategoryId
                                      ? "bg-[#c9c8c8]"
                                      : ""
                                  }
                                >
                                  <Typography
                                    className="text-[#252525] !py-[10px] hover:bg-[#c9c8c8]"
                                    key={i}
                                  >
                                    <div className="flex items-center gap-1">
                                      <span className="pl-1">
                                        <AccountTreeTwoToneIcon className="!h-[20px] !w-[20px]" />
                                      </span>
                                      <span> {res.vName}</span>
                                    </div>
                                  </Typography>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <Link>
                              <Typography className="text-[#252525] p-[10px]">
                                No Sub category Here
                              </Typography>
                            </Link>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </Link>
                ))}
              </div>
            </Box>
          </Grid>
        )}

        <Grid item xs={12} md={9.8}>
          <Box>
            <>
              {categoryData
                .filter((el) => el.iCategoryId === activeCate)
                .map((res, i) => {
                  return (
                    <Typography variant="alternet" className="mt-3" key={i}>
                      Browse {res.vName}
                    </Typography>
                  );
                })}
            </>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              {listFilter.filter((el) =>
                subcatIdss
                  ? el.iCategory === ids && el.iSubCategory === subcatIdss
                  : el.iCategory === ids
              ).length > 0 ? (
                <Typography variant="body2" fontWeight="600">
                  {
                    listFilter.filter((el) =>
                      subcatIdss
                        ? el.iCategory === ids && el.iSubCategory === subcatIdss
                        : el.iCategory === ids
                    ).length
                  }{" "}
                  listings
                </Typography>
              ) : (
                <Typography variant="body2" fontWeight="600">
                  No listings Here
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="caption">Sort By subscribers</Typography>
                <FormControl variant="standard">
                  <Select
                    labelId="sort-by-select-label"
                    id="sort-by-simple-select"
                    value={sortValue}
                    size="small"
                    onChange={handleSort}
                    sx={{ fontWeight: 500, ml: 1, mr: 3 }}
                  >
                    <MenuItem value={"Highest"}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Highest
                      </Typography>
                    </MenuItem>
                    <MenuItem value={"Lowest"}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Lowest
                      </Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Grid container className=" pb-[20px] ">
              {/* || el.iSubCategory === subcatIdss */}
              {listFilter.length > 0 &&
              listFilter.filter((el) =>
                subcatIdss
                  ? el.iCategory === ids && el.iSubCategory === subcatIdss
                  : el.iCategory === ids
              ).length > 0 ? (
                listFilter
                  .filter((el) =>
                    subcatIdss
                      ? el.iCategory === ids && el.iSubCategory === subcatIdss
                      : el.iCategory === ids
                  )
                  .map((data: any, index: any) => (
                    <Grid key={index} item sm={4} className="pb-[20px] ">
                      <>
                        <Card
                          sx={{
                            maxWidth: "330px",
                            minHeight: "350px",
                          }}
                          elevation={0}
                          className="border-[1px] border-[#dadde5] "
                          style={{ boxShadow: "0 0 20px #0100001a" }}
                        >
                          <>
                            <img
                              src={
                                data.vImage
                                  ? "https://api.subsip.com/" + data.vImage
                                  : ""
                              }
                              className="cursor-pointer"
                              onClick={() => {
                                onImageClick(data);
                                // auth?.isAuthenticated
                                //   ? navigate(`/listing/${data?.iBusinessId}`)
                                //   : navigate(AuthRoutePathEnum.SIGN_IN);
                              }}
                              width="100%"
                              height="100px"
                              style={{ objectFit: "cover", height: "215px" }}
                            />
                            <Box
                              sx={{ py: "16px", pl: "16px" }}
                              className="h-[220px] relative w-full "
                            >
                              <Typography
                                onClick={() => {
                                  onImageClick(data);
                                }}
                                variant="body1"
                                fontWeight={600}
                                className="cardDetails"
                              >
                                {data.vName}
                              </Typography>
                              <Typography
                                variant="caption"
                                fontWeight={600}
                                color={theme.palette.grey[500]}
                                className="cardLocation"
                              >
                                {data.vLocation}
                              </Typography>
                              <Box sx={{ my: 1, lineHeight: 0 }}>
                                <Typography
                                  fontSize={16}
                                  className={"textLimitcate2 pb-[20px]"}
                                >
                                  {data.tDescription}
                                </Typography>
                              </Box>
                              <Box
                                className=" absolute w-[95%] right-0 bottom-[14px] "
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "baseline",
                                  paddingTop: "1em",
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  fontWeight={600}
                                  color={theme.palette.grey[500]}
                                  className="items-center"
                                >
                                  <span className="text-[20px] mr-1 text-[#262626]">
                                    {" "}
                                    {data.subscriberCount}
                                  </span>{" "}
                                  <span className="text-[14px] text-[#cdcdcd]">
                                    Subscribe
                                  </span>
                                </Typography>

                                <div className="raletive">
                                  <>
                                    {data?.subscriberIds &&
                                    data?.subscriberIds
                                      .split("")
                                      .filter((el: any) => {
                                        return el == userId;
                                      })[0] &&
                                    auth?.isAuthenticated ? (
                                      <div
                                        className="subscribeLebalListing bg-[#e0e0e0] cursor-pointer"
                                        onClick={() =>
                                          handleUnsub(data?.iBusinessId)
                                        }
                                      >
                                        <span className=" text-[#262626] font-medium">
                                          {" "}
                                          Unsubscribe
                                        </span>
                                      </div>
                                    ) : (
                                      <div
                                        className="subscribeLebalListing bg-[#09292b] cursor-pointer"
                                        onClick={() => {
                                          auth?.isAuthenticated
                                            ? SubcribeBtn(data?.iBusinessId)
                                            : navigate(
                                                AuthRoutePathEnum.SIGN_IN
                                              );
                                        }}
                                      >
                                        <span className=" text-white ">
                                          Subscribe
                                        </span>
                                      </div>
                                    )}
                                  </>
                                </div>
                              </Box>
                            </Box>
                            {/* <Box
                            sx={{
                              textAlign: "center",
                              backgroundColor: theme.palette.grey[300],
                              p: 1,
                            }}
                          >
                            <Typography fontSize={11} fontWeight={600}>
                              {data.footer}
                            </Typography>
                          </Box> */}
                          </>
                        </Card>
                      </>
                    </Grid>
                  ))
              ) : (
                <div className="grid w-full justify-center py-24 ">
                  <span>
                    {subcatIdss
                      ? "No listings available"
                      : "No listings available"}{" "}
                  </span>
                </div>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
