import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faAngleLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";

export function AdminRewardToDetails() {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "Reward",
      headerName: "Rewards",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="info" />,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="success" />,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faPen} />
          </Tooltip>
        </Box>
      ),
    },
    {
      field: "Active",
      headerName: "Active",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <Switch {...label} defaultChecked size="small" color="info" />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 2,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 3,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 4,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 5,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 6,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 7,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 8,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
    },
    {
      id: 9,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Edit",
      Active: "Active",
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
                India Gate Restaurant
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
                New Reward
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box
          style={{
            height: 400,
            width: "100%",
          }}
        >
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
