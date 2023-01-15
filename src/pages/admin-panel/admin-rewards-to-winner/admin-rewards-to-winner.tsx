import React, { useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

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

  console.log(userdata, "userdata");

  const rewardToWinnerList = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getUser({
          userId: 4,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

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
          >
            Notify
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
            India Gate Restaurant Rewards Winners
          </Typography>

          <Box>
            <Typography variant="caption" sx={{ mr: 1 }}>
              Sort By:
            </Typography>
            <FormControl variant="standard">
              <Select
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                value="Newest"
                size="small"
                sx={{ fontWeight: 500 }}
              >
                <MenuItem value={"Newest"}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Newest
                  </Typography>
                </MenuItem>
                <MenuItem value={"Oldest"} sx={{ fontWeight: 500 }}>
                  <Typography variant="body2">Oldest</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
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
