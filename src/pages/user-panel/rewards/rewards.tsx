import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ColoredLabel, PageHeader } from "components";
import {
  Box,
  Grid,
  Drawer,
  ListItem,
  List,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  TextField,
  Chip,
} from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { DataGrid, GridColDef, GridOverlay } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "data";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  GET_ALL_SUBSCRIBER_OF_BUSINESS,
  GET_USER_REWARDS,
} from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { RewardStatusEnum } from "enum";
import { MuiColor } from "type";

export function Rewards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [filter, setFilter] = useState("Available");
  const [businessSearch, setSearchBusiness] = useState("");
  const userId = localStorage.getItem("userId");

  const rewardData = useAppSelector(GET_USER_REWARDS);
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);

  const dispatch = useAppDispatch();

  const getUserReward = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getuserReward({ userId: userId ? parseInt(userId) : 0 })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    getUserReward();
  }, [getUserReward, filter]);

  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.allSubscriberOfBussiness({
          userId: userId ? parseInt(userId) : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  const rewardClaimed = useCallback(
    async (id: any) => {
      try {
        await dispatch(
          AdminThunk.rewardClaimed({
            rewardId: id,
          })
        );
        getUserReward();
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const columns: GridColDef[] = [
    {
      field: "rewardName",
      headerName: "Reward Name",
      width: isMobile ? 125 : 200,
    },
    {
      field: "businessName",
      headerName: "Business Name",
      width: isMobile ? 125 : 200,
    },
    {
      field: "Status",
      headerName: "Status",
      width: isMobile ? 125 : 200,
      renderCell: (params) => (
        <Chip
          label={params.value}
          className={
            params.value == "Missed"
              ? "errorColor"
              : params.value == "Available"
                ? "successColor"
                : "warningColor"
          }
          onClick={() => {
            params.value == "Available" && rewardClaimed(params?.id);
          }}
        />
      ),
    },
  ];

  const rows = rewardData?.map((item) => {
    return {
      id: item.rewardId,
      rewardName: item.rewardName,
      businessName: item.businessName,
      Status: item.status,
    };
  });

  const handleSearch = (value: any) => {
    setFilter(value);
  };

  const handleBusinessSearch = (el: any) => {
    setSearchBusiness(el.target.value);
  };

  const list = rows.filter((el) => {
    return Object.values(el?.Status)
      .join("")
      .toLowerCase()
      .includes(filter.toString().toLowerCase());
  });
  const totalPages: any = Math.ceil(list.length);

  const filterBusiness = rewardData.filter((el) => {
    return Object.values(el.businessName)
      .join("")
      .toLowerCase()
      .includes(businessSearch.toString().toLowerCase());
  });

  const filterData = filterBusiness.map((el) => {
    return el.businessName;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listBusiness = [...new Set(filterData)];

  const subscribedList = useMemo(
    () => (
      <Box sx={{ p: 2 }}>
        <Typography sx={{ my: 1 }}>Subscribed Buisnesses :</Typography>
        <TextField
          sx={{ my: 2 }}
          label="Search Subscriptions"
          onChange={handleBusinessSearch}
          InputProps={{ endAdornment: <Search /> }}
        />
        {listBusiness.map((item, index) => {
          return (
            <div key={index}>
              <List sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
                <ListItem>{item}</ListItem>
              </List>
            </div>
          );
        })}
      </Box>
    ),
    [listBusiness]
  );

  function NoRowsOverlay() {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        {filter == 'Available' && 'No rewards available at this moment.'}
        {filter == 'Claimed' && 'You have not claimed any rewards yet.'}
        {filter == 'Missed' && 'You have not missed any rewards yet.'}
      </Stack>
    );
  }


  return (
    <Container maxWidth="xl"  sx={{ py: 8 , px:2 }}>
      <PageHeader
        name="Rewards"
        icon={{ icon: faCircleQuestion, tooltip: "The certificates you claim will be emailed to you within 24 hours. Use your certificate before the expiration date shown on it." }}
      >
        <Box sx={{ display: "flex" }} className="gap-4">
          {/* {[
            { title: "Available", color: theme.palette.success.light },
            { title: "Claimed", color: theme.palette.warning.light },
            { title: "Missed", color: theme.palette.error.main },
          ].map((res, i) => (
            <ColoredLabel
              title={res.title}
              color={res.color}
              key={`${res.title}-${i}`}
            />
          ))} */}
          <Button
            style={{ background: theme.palette.success.light }}
            className="claimbtn"
            onClick={() => handleSearch("Available")}
          >
            Available
          </Button>
          <Button
            style={{ background: theme.palette.warning.light }}
            className="claimbtn"
            onClick={() => handleSearch("Claimed")}
          >
            Claimed
          </Button>
          <Button
            style={{ background: theme.palette.error.main }}
            className="claimbtn"
            onClick={() => handleSearch("Missed")}
          >
            Missed
          </Button>
        </Box>
      </PageHeader>

      <Grid container sx={{ my: 3 }} className=' justify-center'>
        {/* {!isMobile ? (
          <Grid item xs={12} md={4}>
            {subscribedList}
          </Grid>
        ) : (
          <Drawer open>{subscribedList}</Drawer>
        )} */}

        <Grid item xs={12} md={8}>
          {/* <TableContainer sx={{ height: 400, width: "75%" }}>
            <DataGrid
              disableSelectionOnClick
              components={{ NoRowsOverlay }}
              rows={list}
              columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            />
          </TableContainer> */}

          <TableContainer component={Paper} sx={{ height: 400 }}
          >
            <Table sx={{ minWidth: 300 }}
              aria-label="caption table"

            >
              <TableHead>
                <TableRow>
                  <TableCell>Reward Name</TableCell>
                  <TableCell>Business Name</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
              // component={NoRowsOverlay}
              >
                {list?.map((row) => (
                  <TableRow key={row.rewardName}

                  >
                    <TableCell component="th" scope="row">
                      {row.rewardName}
                    </TableCell>
                    <TableCell>{row.businessName}</TableCell>
                    <TableCell

                    >
                      <Chip
                        label={row.Status}
                        className={
                          row.Status == "Missed"
                            ? "errorColor"
                            : row.Status == "Available"
                              ? "successColor"
                              : "warningColor"
                        }
                        onClick={() => {
                          row.Status == "Available" && rewardClaimed(row?.id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>

            </Table>
            {list?.length == 0 &&
            <div className="flex justify-center items-center h-[300px]">
              <span> {NoRowsOverlay()}</span>
            </div>}
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
