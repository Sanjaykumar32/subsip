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
import { theme } from "theme";

export function AdminSubCategory() {
  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    { field: "Subcategory", headerName: "Subcategory", width: 200 },
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
            sx={{
              ".MuiButton-iconSizeSmall": { size: "10px" },
              backgroundColor: theme.palette.grey[300],
              color: theme.palette.common.black,
            }}
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
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "India Gate Restaurant",
      Subcategory: "17 subcategories",
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
                value="Newest"
                size="small"
                sx={{ fontWeight: 500 }}
              >
                <MenuItem value={"Newest"}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Newest
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
          <Box style={{ height: 400, width: "100%", marginTop: "5px" }}>
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
