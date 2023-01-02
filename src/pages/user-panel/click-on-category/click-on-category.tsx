import React, { useEffect, useCallback, useState } from "react";
import {
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
import { useNavigate } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";

export function ClickOnCategory() {

  const [ids , setId] = useState<any>()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
const naviagate =  useNavigate()

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
 console.log(categoryData ,'cate')
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

  const handleList = (id : any)=> {
   
    // naviagate(`/listing?${id?.iCategoryId}`);
    setId(id?.iCategoryId)
  }

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

  console.log(businessData ,'businessData')
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
                {categoryData.map((item: any, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    {item.vName}
                  </ListItem>
                ))}

                {/* {Array(30)
                  .fill({
                    name: "Sandwiches",
                  })
                  .map((element, index: number) => (
                    <ListItem key={`${element.name}-${index}`} sx={{ px: 0 }}>
                      {element.name}
                    </ListItem>
                  ))} */}
              </List>
            </Box>
          </Drawer>
        )}
        {!isMobile && (
          <Grid item xs={12} md={2.1}>
            <Box sx={{ overflow: "auto", my: 1 }} className="pl-[18px]">
              <Typography variant="body1" fontWeight="600">
                Listings by Category:
              </Typography>
              <List>
                {categoryData.map((item, index) => (
                  <ListItem
                  key={index}
                  sx={{ px: 0 }}
                  onClick={()=>  handleList(item)}
                  className="font-normal text-[16px] leading-[24px] text-[#434d59]"
                  >
                    {item.vName}
                 
                  </ListItem>
                ))}

                {/* {Array(30)
                  .fill({
                    name: "Sandwiches",
                  })
                  .map((element, index: number) => (
                    <ListItem key={`${element.name}-${index}`} sx={{ px: 0 }} className='font-normal text-[16px] leading-[24px] text-[#434d59]'>
                      {element.name}
                    </ListItem>
                  ))} */}
              </List>
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
              <Typography variant="body2" fontWeight="600">
                61 listings
              </Typography>
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
              
                {businessData.length > 0 && 
                businessData.filter(el=> el.iCategory === ids)
                .map((data , index) => (
                  <Grid key={index} item sm={4} className="pb-[20px] ">
                    <Card
                      sx={{
                        maxWidth: "330px",
                        minHeight: "350px",
                      }}
                      elevation={0}
                      className="border-[1px] border-[#dadde5] "
                      style={{ boxShadow: "0 0 20px #0100001a" }}
                      >
                      <img
                    
                        src={
                          data.vImage
                            ? "http://159.223.194.50:8000/" + data.vImage
                            : ''
                        }
                        // alt={data.eStatus}
                        width="100%"
                        height="100px"
                        style={{ objectFit: "cover", height: "215px" }}
                      />
                      <Box sx={{ py: 1.5, pl: "12px" }}>
                        <Typography variant="body1" fontWeight={600}>
                          {data.categoryName}
                        </Typography>
                        <Typography
                          variant="caption"
                          fontWeight={600}
                          color={theme.palette.grey[500]}
                        >
                          {data.vLocation}
                        </Typography>

                        <Box sx={{ my: 1, lineHeight: 0 }}>
                          <Typography fontSize={11} fontWeight={600}>
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
                            {data.subscriberCount}
                          </Typography>
                          <Button color="error" variant="rounded" size="small">
                            Subscribe
                          </Button>
                          <div className="raletive">
                            <div className="subscribeLebalListing">
                              <span className=" text-white  ">Subscribe</span>
                            </div>
                          </div>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                          backgroundColor: theme.palette.grey[300],
                          p: 1,
                        }}
                      >
                        <Typography fontSize={11} fontWeight={600}>
                          {/* {data.footer} */}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                )) 
                }
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
