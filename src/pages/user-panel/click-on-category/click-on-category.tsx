import React, { useEffect, useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Drawer,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { ICategoryData } from "interface";
import { GET_BUSINESS, GET_CATEGORY } from "data/selectors";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";
import { useAuth } from "context/auth.context";
import { AuthRoutePathEnum } from "enum";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ClickOnCategory() {
  const [ids, setId] = useState<any>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeCate, setActiveCate] = useState<any>(false);

  const location = useLocation();
  const link = useParams();

  const getCateID = location.pathname.split("/")[2];

  const data = {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2881&q=80",
    title: "India Gate Restaurant",
    location: "Seattle,WA",
    desc: "Welcome to the India Gate Restaurant where we offer unique food.",
    subscribers: "46.2K subscribers",
    footer:
      "Claim FREE gift cards as they become available from the business listed above ",
  };

  const categoryData = useAppSelector(GET_CATEGORY);
  const dispatch = useAppDispatch();

  const getcategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getcategory();
  }, [getcategory]);

  const handleList = (id: any) => {
    // naviagate(`/listing?${id?.iCategoryId}`);
    setId(id);
    // setActiveCate(id?.iCategoryId)
  };

  const businessData = useAppSelector(GET_BUSINESS);

  const auth = useAuth();

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

  const listFilter = businessData.filter((el) => {
    // console.log(el ,'el business');
    //  return Object.values(el.vName.toString().toLowerCase().includes(location.search.slice(1 ,20).toString().toLowerCase()))
    return Object.values(el.vName.toString().toLowerCase())
      .join("")
      .toLowerCase()
      .includes(location.search.toString().slice(1, 19).toLowerCase());
  });

  console.log(listFilter, "listFilter");

  const totalLenght = businessData.filter(
    (item: any) => item.iCategory === ids
  );

  console.log(totalLenght, "totalLenght getCateID");

  useEffect(() => {
    if (getCateID) {
      console.log(getCateID, "getCateID");
      handleList(Number(getCateID));
      setActiveCate(Number(getCateID));
    }
  }, [getCateID, location]);
  const navigate = useNavigate();

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
                    className={` ${
                      activeCate && " activeCate "
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
                Listings by Category:
              </Typography>

              <div>
                {categoryData.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={`font-normal text-[16px] leading-[24px] text-[#434d59] cursor-pointer nan ${
                        activeCate === item?.iCategoryId ? " activeCate" : ""
                      }  `}
                      onClick={() => {
                        handleList(item?.iCategoryId),
                          setActiveCate(item?.iCategoryId);
                      }}
                    >
                      <Typography> {item.vName}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={9.8}>
          <Box>
            <Typography variant="alternet">
              Browse restaurants in Seattle, WA
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              {totalLenght.length > 0 ? (
                <Typography variant="body2" fontWeight="600">
                  {totalLenght.length} listings
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
              {listFilter.length > 0 &&
                listFilter
                  .filter((el) => el.iCategory === ids)
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
                          {/* {setActiveCate(true)} */}

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
                  ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
