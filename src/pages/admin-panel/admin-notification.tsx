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

export function AdminNotification() {
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
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "Notification 1",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "Notification 1",
      Actions: "Edit",
    },
  ];

  return (
    <Container maxWidth={false} disableGutters sx={{ m: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
            New Notification
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          my: 1,
          mt: 4,
        }}
      >
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
  );
}
