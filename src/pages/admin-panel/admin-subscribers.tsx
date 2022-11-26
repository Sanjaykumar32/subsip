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
import { faAngleLeft, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

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
    <Container maxWidth="md" disableGutters sx={{ m: 0 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="caption"
                color={theme.palette.info.main}
                sx={{ fontWeight: 600 }}
              >
                46,200 Subscribers
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <FontAwesomeIcon icon={faSliders} size="lg" />
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
                my: 2,
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
