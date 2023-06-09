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
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { AdminBackButton } from "components";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { GET_SUBSCRIBER_OF_BUSSINESS } from "data/selectors";

export function AdminListingToSubscribers() {
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

  const rows = [
    {
      id: 1,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 2,
      Email: "Hik@hik.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 3,
      Email: "Abi@abi.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 4,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 5,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 6,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 7,
      Email: "Jake@gmail.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 8,
      Email: "Hik@hik.com",
      Verified: "Verified",
      Actions: "Delete",
    },
    {
      id: 9,
      Email: "Abe@abe.com",
      Verified: "Verified",
      Actions: "Delete",
    },
  ];

  const dispatch = useAppDispatch();

  const AllBusiness = useCallback(async () => {
    const businessId = "1";
    try {
      await dispatch(
        AdminThunk.subscribeOfBussiness({ businessId: businessId })
      );

    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    AllBusiness();
  }, [AllBusiness]);


  const allSubscriberOfBussiness = useAppSelector(GET_SUBSCRIBER_OF_BUSSINESS);

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

      <Box>
        <Typography variant="body1" sx={{ fontWeight: 800 }}>
          India Gate Restaurant Subscribers
        </Typography>
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
            <Typography
              variant="caption"
              color={theme.palette.info.main}
              sx={{ fontWeight: 600 }}
            >
              46,200 Subscribers
            </Typography>
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
