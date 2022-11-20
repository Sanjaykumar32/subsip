import React from "react";
import {
  Box,
  Button,
  Chip,
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

export function AdminRewardToDetails() {
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
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 2,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 3,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 4,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 5,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 6,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 7,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 8,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
    },
    {
      id: 9,
      Name: "50 Gift Card",
      Reward: "5/100 claimed",
      Status: "Active",
      Actions: "Deactivate/edit",
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
