import React from "react";
import {
  Avatar,
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
import { Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

export function AdminListing() {
  const columns: GridColDef[] = [
    {
      field: "Profile",
      headerName: "Profile",
      width: 70,
      renderCell: (params) => {
        return (
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
            }}
            src={params.value}
          />
        );
      },
    },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    { field: "Subscribers", headerName: "Subscribers", width: 200 },
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
        <Box className="tableButton">
          <Button
            size="small"
            endIcon={<Edit />}
            variant="rounded"
            sx={{ ".MuiButton-iconSizeSmall": { size: "10px" } }}
          >
            {params.value}
          </Button>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 2,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 3,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 4,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 5,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 6,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 7,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 8,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 9,
      Profile: "Profile",
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
  ];

  return (
    <Container maxWidth="md" disableGutters sx={{ m: 0 }}>
      <Grid container spacing={2}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}>
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
              New Listing
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
                value="Recommended"
                size="small"
                sx={{ fontWeight: 500 }}
              >
                <MenuItem value={"Recommended"}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Recommended
                  </Typography>
                </MenuItem>
                <MenuItem value={"Oldest"}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Oldest
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
        </Container>
      </Grid>
    </Container>
  );
}
