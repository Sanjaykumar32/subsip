import React, { useEffect, useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Drawer,
  FormControl,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GET_BUSINESS, GET_CATEGORY, GET_SUB_CATEGORY } from "data/selectors";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";
import { useAuth } from "context/auth.context";
import { AuthRoutePathEnum } from "enum";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ClickOnCategory() {
  const [ids, setId] = useState<any>();
  const [subcatIdss, setSubCatIdData] = useState<any>();
  const auth = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeCate, setActiveCate] = useState<any>(false);
  const [subCatdata, setSubData] = useState<any>([]);

  const location = useLocation();

  const [searchParams] = useSearchParams();

  console.log(subCatdata, "subCatdata");
  console.log(activeCate, 'activeCate')

  const getCateID = location.pathname.split("/")[2];

  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);

  const dispatch = useAppDispatch();

  const getcategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  console.log(subCategoryData, "subCategoryData");

  const filteredSubCategory = subCategoryData?.filter((item) => {
    return item.iCategoryId == getCateID;
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

  const listFilter = businessData.filter(
    (el: { vName: { toString: () => string } }) => {
      // console.log(el ,'el business');
      //  return Object.values(el.vName.toString().toLowerCase().includes(location.search.slice(1 ,20).toString().toLowerCase()))
      return Object.values(el.vName.toString().toLowerCase())
        .join("")
        .toLowerCase()
        .includes(location.search.toString().slice(1, 19).toLowerCase());
    }
  );

  useEffect(() => {
    if (getCateID) {
      console.log(getCateID, "getCateID");
      handleList(Number(getCateID));
      setActiveCate(Number(getCateID));
    }
  }, [getCateID, location]);
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState<string>("");

  const handleChange = (panel: string) => {
    setExpanded(panel ? panel : "");
  };

  return (
    <Container maxWidth={false} sx={{ p: 4 }}>
      <Grid container>
        {isMobile && (
          <Drawer>
            <Box sx={{ overflow: "auto", my: 1, p: 4 }}>
              <Typography variant="body1" fontWeight="600">
                Listings by subcategory:
              </Typography>

              <List>
                {categoryData.map((item: any, index: any) => (
                  <ListItem
                    key={index}
                    sx={{ px: 0 }}
                    className={` ${activeCate && " activeCate "
                      }  cursor-pointer `}
                  >
                    {item.vName}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        )}
        {!isMobile && (
          <Grid item xs={12} md={2.1} sx={{ paddingRight: "20px" }}>
            <Box sx={{ overflow: "auto", my: 1 }} className="pl-[18px]">
              <Typography variant="body1" fontWeight="600">
                Listings by Category
              </Typography>

              <div>
                {categoryData.map((item, index) => (
                  <Link href={`/category/${item?.iCategoryId}`} key={index}>
                    {item && (
                      <Accordion
                        expanded={expanded === item.vName}
                        onChange={() => {
                          item.vName && handleChange(item.vName);
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          className={`font-normal text-[16px] leading-[24px] min-h-[50px] text-[#434d59] cursor-pointer nan ${activeCate === item?.iCategoryId
                            ? " activeCate"
                            : ""
                            }  `}
                          onClick={() => {
                            handleList(item?.iCategoryId),
                              // handleSubList(item?.iSubCategoryId);
                              handleSubList(null);
                            setActiveCate(item?.iCategoryId);
                            // setSubData(filteredSubCategory);
                          }}
                        >
                          {item?.vName}
                        </AccordionSummary>

<<<<<<< HEAD
                      <AccordionDetails>
                     {auth.isAuthenticated && filteredSubCategory.length > 0 ? filteredSubCategory.map((res: any, i: number) => (
                          
                          <Link
                            // href={`/category/${res?.iCategoryId}?subCategory=${res?.iSubCategoryId}`}
                            key={i}
                            onClick={() => handleSubList(res?.iSubCategoryId)}
                            
                          >
                            <Typography className="text-[#252525]" key={i}>{res.vName}</Typography>
                          </Link>
                          // <Link
                          //   href={{
                          //     pathname: "/category",
                          //     query: {subCategory: res?.iSubCategoryId },
                          //   }}
                          //   key={index}
                          // >
                          //   Some Text
                          // </Link>
                        )) : <Link>
                          <Typography className="text-[#252525]" >No Sub category Here</Typography>
                        </Link>}
                      </AccordionDetails>
                    </Accordion>
=======
                        <AccordionDetails>
                          {filteredSubCategory.length > 0 ? (
                            filteredSubCategory.map((res: any, i: number) => (
                              <Link
                                // href={`/category/${res?.iCategoryId}?subCategory=${res?.iSubCategoryId}`}
                                key={i}
                                onClick={() =>
                                  handleSubList(res?.iSubCategoryId)
                                }
                              >
                                <Typography className="text-[#252525]" key={i}>
                                  {res.vName}
                                </Typography>
                              </Link>
                              // <Link
                              //   href={{
                              //     pathname: "/category",
                              //     query: {subCategory: res?.iSubCategoryId },
                              //   }}
                              //   key={index}
                              // >
                              //   Some Text
                              // </Link>
                            ))
                          ) : (
                            <Link>
                              <Typography className="text-[#252525]">
                                No Sub category Here
                              </Typography>
                            </Link>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    )}
>>>>>>> 35e9d10968516a4f7b0c6aec339b6bee8d10b57f
                  </Link>
                ))}
              </div>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={9.8}>
          <Box>
            <Typography variant="alternet">Browse {activeCate == 65 ? 'Restaurants' : activeCate == 66 ? 'Home Services' : activeCate == 67 ? 'Auto Services' : activeCate == 68 ? 'More' : 'Restaurants'}</Typography>
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
                <Typography variant="caption">Sort By:</Typography>
                <FormControl variant="standard">
                  <Select
                    labelId="sort-by-select-label"
                    id="sort-by-simple-select"
                    value="Newest"
                    size="small"
                    sx={{ fontWeight: 500, ml: 1, mr: 3 }}
                  >
                    <MenuItem value={"Newest"}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Newest
                      </Typography>
                    </MenuItem>
                    <MenuItem value={"Oldest"}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Oldest
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
                    <Grid
                      key={index}
                      item
                      sm={4}
                      className="pb-[20px] "
                      onClick={() => {
                        auth?.isAuthenticated
                          ? navigate(`/listing/${data.iBusinessId}`)
                          : navigate(AuthRoutePathEnum.SIGN_IN);
                      }}
                    >
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
                                ? "http://159.223.194.50:8000/" + data.vImage
                                : ""
                            }
                            // alt={data.eStatus}
                            width="100%"
                            height="100px"
                            style={{ objectFit: "cover", height: "215px" }}
                          />
                          <Box sx={{ py: 1.5, pl: "12px" }}>
                            <Typography variant="body1" fontWeight={600}>
                              {data.vName}
                            </Typography>
                            <Typography
                              variant="caption"
                              fontWeight={600}
                              color={theme.palette.grey[500]}
                            >
                              {data.vLocation}
                            </Typography>
                            <Box sx={{ my: 1, lineHeight: 0 }}>
                              <Typography
                                fontSize={11}
                                fontWeight={600}
                                className={"textLimit2"}
                              >
                                {data.tDescription}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "baseline",
                              }}
                            >
                              <Typography
                                variant="caption"
                                fontWeight={600}
                                color={theme.palette.grey[500]}
                              >
                                {data.subscriberCount + " Subscribe"}
                              </Typography>
                              {/* <Button color="error" variant="rounded" size="small">
                                Subscribe
                              </Button> */}
                              <div className="raletive">
                                <div className="subscribeLebalListing">
                                  <span className=" text-white  ">
                                    Subscribe
                                  </span>
                                </div>
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
                    </Grid>
                  )))
                : <div className="grid w-full justify-center py-24 ">
                  <span>{subcatIdss ? 'This Subcatogery No listing Here ' : "This Category no listing Here "} </span>
                </div>}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
