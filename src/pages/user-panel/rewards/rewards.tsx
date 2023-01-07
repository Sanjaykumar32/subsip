import React, { useCallback, useEffect, useMemo } from "react";
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
} from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "data";
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

  const chipStatusColor = (): MuiColor => {
    switch (status) {
      case RewardStatusEnum.CLAIM:
        return "success";
      case RewardStatusEnum.CLAIMED:
        return "warning";
      case RewardStatusEnum.MISSED:
      default:
        return "error";
    }
  };

  const rewardData = useAppSelector(GET_USER_REWARDS);
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);

  const dispatch = useAppDispatch();

  const getUserReward = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getuserReward({ userId: 4 }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getUserReward();
  }, [getUserReward]);

  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      await dispatch(AdminThunk.allSubscriberOfBussiness({ userId: 5 }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  console.log(subscribeBusiness, "subscribeBusiness");

  const columns: GridColDef[] = [
    // {
    //   field: "id",
    //   headerName: "",
    //   width: 100,
    //   renderCell: () => <Avatar sx={{ mx: "auto", width: 35, height: 35 }} />,
    // },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 150,
    //   renderCell: () => <Button variant="contained"> Claim </Button>,
    // },

    {
      field: "rewardName",
      headerName: "Reward Name",
      width: 150,
    },
    {
      field: "businessName",
      headerName: "Business Name",
      width: 150,
    },
    {
      field: "redeemedCount",
      headerName: "Redeemed Count",
      width: 150,
    },
  ];

  const rows = rewardData.map((item) => {
    return {
      id: item.rewardId,
      rewardName: item.rewardName,
      businessName: item.businessName,
      redeemedCount: item.redeemedCount,
    };
  });

  const subscribedList = useMemo(
    () => (
      <Box sx={{ p: 2 }}>
        <Typography sx={{ my: 1 }}>Subscribed Buisnesses :</Typography>
        <TextField
          sx={{ my: 2 }}
          label="Search Subscriptions"
          InputProps={{ endAdornment: <Search /> }}
        />
        <List sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
          <ListItem> All </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
        </List>
      </Box>
    ),
    []
  );

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <PageHeader
        name="Rewards"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex" }}>
          {[
            { title: "Availabel", color: theme.palette.success.light },
            { title: "Claimed", color: theme.palette.warning.light },
            { title: "Missed", color: theme.palette.error.main },
          ].map((res, i) => (
            <ColoredLabel
              title={res.title}
              color={res.color}
              key={`${res.title}-${i}`}
            />
          ))}
        </Box>
      </PageHeader>

      <Grid container sx={{ my: 3 }}>
        {!isMobile ? (
          <Grid item xs={12} md={4}>
            {subscribedList}
          </Grid>
        ) : (
          <Drawer open>{subscribedList}</Drawer>
        )}

        <Grid item xs={12} md={8}>
          <TableContainer sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
