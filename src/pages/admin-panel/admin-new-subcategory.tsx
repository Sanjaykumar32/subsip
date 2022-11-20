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
import { Edit } from "@mui/icons-material";

export function AdminNewSubCategory() {
  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Button
          size="small"
          endIcon={<Edit />}
          variant="rounded"
          sx={{
            ".MuiButton-iconSizeSmall": { size: "10px" },
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.common.black,
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
      Name: "Jake@gmail.com",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "Hik@hik.com",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "Abi@abi.com",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "Abe@abe.com",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "Jake@gmail.com",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "Abe@abe.com",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "Jake@gmail.com",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "Hik@hik.com",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "Abe@abe.com",
      Actions: "Edit",
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
              <Typography variant="body1" sx={{ fontWeight: 800 }}>
                India Gate Restaurant Subscribers
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.info.main}
                sx={{ fontWeight: 600 }}
              >
                46,200 Subscribers
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
