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
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";

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
        <Box>
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faPen} />
          </Tooltip>
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
              textAlign: "center",
              height: "35px",
            }}
            color="info"
            variant="contained"
          >
            New subcategory
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
            Category: Home services
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
