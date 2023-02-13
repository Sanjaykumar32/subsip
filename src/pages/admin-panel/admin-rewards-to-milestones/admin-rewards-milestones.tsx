import React, { useCallback, useEffect } from "react";
import { Box, Button, Chip, Container, Link, Tooltip } from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminRoutePathEnum } from "enum";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { useNavigate } from "react-router-dom";
import { GET_REWARDS } from "data/selectors";

export function AdminRewardsMileStones() {
  const dispatch = useAppDispatch();
  const rewardData = useAppSelector(GET_REWARDS);
  const navigate = useNavigate();

  const getReward = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getReward());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const rows = rewardData.map((item) => {
    return {
      id: item.iBusinessId,
      businessName: item?.businessName,
      rewardCount: item.rewardCount,
    };
  });

  useEffect(() => {
    getReward();
  }, [getReward]);

  const columns: GridColDef[] = [
    {
      field: "businessName",
      headerName: "Name",
      width: 200,
      renderCell: (params) => (
        <Link
          href={`${AdminRoutePathEnum.ADMIN_REWARDS_TO_DETAILS}/?businessId=${params.id}`}
        >
          {params.value}
        </Link>
      ),
    },
    {
      field: "rewardCount",
      headerName: "Rewards",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="info" />,
    },
  ];

  return (
    <Container maxWidth={false} disableGutters sx={{ m: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
      <Container maxWidth="sm" sx={{ my: 4 }}>
        <Box
          style={{
            height: 400,
            width: "100%",
            marginTop: "40px",
          }}
        >
          <DataGrid
          disableSelectionOnClick
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
