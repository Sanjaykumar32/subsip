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
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AdminSubCategory() {
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
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "Pest control",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "Pest control",
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
              <Typography variant="body1" sx={{ fontWeight: 800, my: 2 }}>
                Category: Home services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
                New subcategory
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

        <Box style={{ height: 400, width: "100%", marginTop: "5px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </Container>
  );
}
