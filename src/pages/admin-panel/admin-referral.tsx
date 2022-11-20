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
import { Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { theme } from "theme";

export function AdminReferral() {
  const columns: GridColDef[] = [
    {
      field: "MilestoneName",
      headerName: "Milestone Name",
      width: 200,
    },
    { field: "Achieved", headerName: "Achieved", width: 200 },
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
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 2,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 3,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 4,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 5,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 6,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 7,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 8,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
      Actions: "Edit",
    },
    {
      id: 9,
      MilestoneName: "India Gate Restaurant",
      Achieved: "17 subscribers",
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
                textAlign: "center",
                height: "35px",
              }}
              color="info"
              variant="contained"
            >
              Add milestone
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
