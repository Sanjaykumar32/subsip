import React, { useCallback, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { AdminBackButton } from "components";
import { useAppDispatch, useAppSelector } from "data";
import { GET_USER } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useSearchParams } from "react-router-dom";

export function AdminRewardsToWinner() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const userdata = useAppSelector(GET_USER);
  const rewardToWinnerList = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getUser({
          userId: userId,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    rewardToWinnerList();
  }, [rewardToWinnerList]);

  const columns: GridColDef[] = [
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  ];

  const rows = userdata.map((item) => {
    return {
      id: item.userId,
      email: item?.email,
      Contacted: item.emailVerified,
    };
  });

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
      </Box>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box
          style={{
            height: 400,
            width: "100%",
            marginTop: "5px",
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
