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

export function AdminRewardsToWinner() {
  const columns: GridColDef[] = [
    {
      field: "Email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Contacted",
      headerName: "Contacted",
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
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 2,
      Email: "Hik@hik.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 3,
      Email: "Abi@abi.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 4,
      Email: "Abe@abe.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 5,
      Email: "Jake@gmail.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 6,
      Email: "Abe@abe.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 7,
      Email: "Jake@gmail.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 8,
      Email: "Hik@hik.com",
      Contacted: "Contacted",
      Actions: "Delete",
    },
    {
      id: 9,
      Email: "Abe@abe.com",
      Contacted: "Contacted",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          my: 1,
          mt: 4,
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
          checkboxSelection
        />
      </Box>
    </Container>
  );
}
