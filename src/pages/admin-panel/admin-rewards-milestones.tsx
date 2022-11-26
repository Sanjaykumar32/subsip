import React from "react";
import { Box, Button, Chip, Container, Tooltip } from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AdminRewardsMileStones() {
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
      field: "Actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <FontAwesomeIcon icon={faPen} />
        </Tooltip>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 2,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 3,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 4,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 5,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 6,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 7,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 8,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
    {
      id: 9,
      Name: "50 Gift Card",
      Reward: "1 reward",
      Actions: "Edit",
    },
  ];

  return (
    <Container maxWidth="md" disableGutters sx={{ m: 0 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            size="large"
            sx={{
              fontWeight: 800,
              width: "120px",
              textAlign: "center",
              height: "35px",
              my: 2,
            }}
            color="info"
            variant="contained"
          >
            New Reward
          </Button>
        </Box>

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
