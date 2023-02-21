import React from "react";
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
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { AdminBackButton } from "components";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AdminReferralToSubscribe() {
  const columns: GridColDef[] = [
    {
      field: "Email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Contacted",
      headerName: "Contacted",
      width: 130,
      renderCell: () => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <VerifiedUserIcon color="success" sx={{ mr: 1 }} />
        </Box>
      ),
    },
    {
      field: "Milestone",
      headerName: "Milestone",
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

  const rows = [
    {
      id: 1,
      Email: "Jake@gmail.com",
      Contacted: "Verified",
      Milestone: 1,
      Actions: "Delete",
    },
    {
      id: 2,
      Email: "Hik@hik.com",
      Contacted: "Verified",
      Actions: "Delete",
      Milestone: 2,
    },
    {
      id: 3,
      Email: "Abi@abi.com",
      Contacted: "Verified",
      Actions: "Delete",
      Milestone: 4,
    },
    {
      id: 4,
      Email: "Abe@abe.com",
      Contacted: "Verified",
      Actions: "Delete",
      Milestone: 2,
    },
    {
      id: 5,
      Email: "Jake@gmail.com",
      Contacted: "Verified",
      Actions: "Delete",
      Milestone: 3,
    },
    {
      id: 6,
      Email: "Abe@abe.com",
      Contacted: "Verified",
      Milestone: 1,
      Actions: "Delete",
    },
    {
      id: 7,
      Email: "Jake@gmail.com",
      Contacted: "Verified",
      Milestone: 1,
      Actions: "Delete",
    },
    {
      id: 8,
      Email: "Hik@hik.com",
      Contacted: "Verified",
      Milestone: 1,
      Actions: "Delete",
    },
    {
      id: 9,
      Email: "Abe@abe.com",
      Contacted: "Verified",
      Milestone: 1,
      Actions: "Delete",
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
            Referral winners
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
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Container>
    </Container>
  );
}
