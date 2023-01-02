import React, { useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";
import { AdminRoutePathEnum } from "enum";
import { useNavigate } from "react-router-dom";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_USER_REWARDS } from "data/selectors";

export function AdminRewardToDetails() {
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");

  const userRewardData = useAppSelector(GET_USER_REWARDS);

  const getUserReward = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getuserReward({ userId: userId ? parseInt(userId) : 0 })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  // const rows = userRewardData.map((item) => {
  //   return {
  //     id: item.rewardId,
  //     businessName: item.businessName,
  //     rewardCount: item.rewardCount,
  //     Actions: ["Edit", "Delete", item?.rewardId],
  //   };
  // });

  useEffect(() => {
    getUserReward();
  }, [getUserReward]);

  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => (
        <Link href={AdminRoutePathEnum.ADMIN_REWARDS_TO_WINNERS}>
          {params.value}
        </Link>
      ),
    },
    {
      field: "Reward",
      headerName: "Rewards",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="info" />,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="success" />,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faPen} />
          </Tooltip>
        </Box>
      ),
    },
    {
      field: "Active",
      headerName: "Active",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <Switch {...label} defaultChecked size="small" color="info" />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 2,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 3,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 4,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 5,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 6,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 7,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 8,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 9,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
  ];

  return (
    <Container maxWidth={false} disableGutters sx={{ m: 0 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <AdminBackButton />
        <Box>
          <Button
            size="large"
            sx={{
              fontWeight: 800,
              width: "120px",
              textAlign: "center",
              height: "35px",
            }}
            color="info"
            variant="contained"
            onClick={() => navigate(AdminRoutePathEnum.ADMIN_NEW_REWARDS)}
          >
            New Reward
          </Button>
        </Box>
      </Box>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 800 }}>
            India Gate Restaurant
          </Typography>
        </Box>

        <Box
          style={{
            height: 400,
            width: "100%",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </Container>
  );
}
