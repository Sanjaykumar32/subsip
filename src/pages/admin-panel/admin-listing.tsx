import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { theme } from "theme";

export function AdminListing() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex" }}>
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
                mr: 1,
              }}
            />

            {params.value}
          </Box>
        );
      },
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
            endIcon={<FontAwesomeIcon icon={faPen} size="sm" />}
            variant="rounded"
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
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "India Gate Restaurant",
      Subscribers: "46.2K subscribers",
      Location: "Seattle, WA",
      Actions: "Edit",
    },
  ];

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={10}>
          <Container>
            {/* <Box
              sx={{
                ml: 90,
              }}
            >
              <Button
                size="large"
                sx={{
                  fontWeight: 800,
                  backgroundColor: theme.palette.info.main,
                  color: "white",
                }}
                variant="contained"
              >
                New Listing
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "baseline", ml: 80, my: 2 }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ ml: 2 }}>
                Sort By:
              </Typography>
              <FormControl variant="standard">
                <Select
                  variant="standard"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  value="Recommended "
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <MenuItem value={"Recommended "}>Recommended </MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box> */}

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
      </Grid>
    </Container>
  );
}
