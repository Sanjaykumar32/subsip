import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

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
        <Button
          size="small"
          variant="rounded"
          sx={{
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.error.main,
          }}
        >
          {params.value}
        </Button>
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
    <Container maxWidth="md" disableGutters sx={{ m: 0 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Button
                size="large"
                sx={{
                  color: "black",
                }}
                startIcon={
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="2x"
                    color={theme.palette.info.main}
                  />
                }
              >
                Back
              </Button>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 800, my: 1 }}>
                India Gate Restaurant Rewards Winners
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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

            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "flex-end",
                my: 1,
              }}
            >
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
          </Grid>
        </Grid>
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
    </Container>
  );
}
