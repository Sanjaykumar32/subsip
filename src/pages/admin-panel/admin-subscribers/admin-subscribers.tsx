import React, { useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faSliders, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_ALL_SUBSCRIBER_OF_BUSINESS } from "data/selectors";

export function AdminSubscribers() {
  const columns: GridColDef[] = [
    {
      field: "Email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Verified",
      headerName: "Verified",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <VerifiedUserIcon color="success" sx={{ mr: 1 }} />
          {params.value}
        </Box>
      ),
    },
    {
      field: "Location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faTrash} />
          </Tooltip>
        </Box>
      ),
    },
  ];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);

  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      await dispatch(AdminThunk.allSubscriberOfBussiness({ userId: 5 }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  console.log(subscribeBusiness, "subscribeBusiness");

  const rows = [
    {
      id: 1,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 2,
      Email: "Hik@hik.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 3,
      Email: "Abi@abi.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 4,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 5,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 6,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 7,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 8,
      Email: "Hik@hik.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
    },
    {
      id: 9,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
      Location: "Seattle, WA",
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
        <Box>
          <Typography
            variant="body1"
            color={theme.palette.info.main}
            sx={{ fontWeight: 600 }}
          >
            46,200 Subscribers
          </Typography>
        </Box>
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
            onClick={() => navigate(AdminRoutePathEnum.ADMIN_NOTIFY_BUTTON)}
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
          <Box>
            <FontAwesomeIcon
              icon={faSliders}
              size="sm"
              style={{ marginLeft: "4px" }}
            />
          </Box>

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
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Container>
    </Container>
  );
}
