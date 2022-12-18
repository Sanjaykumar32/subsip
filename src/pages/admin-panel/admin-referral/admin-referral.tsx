import React, { useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
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
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { GET_REFFERRAL_CODE } from "data/selectors";

export function AdminReferral() {
  const columns: GridColDef[] = [
    {
      field: "MilestoneName",
      headerName: "Milestone Name",
      width: 200,
    },

    {
      field: "Achieved",
      headerName: "Achieved",
      width: 200,
      renderCell: (params) => <Chip label={params.value} color="info" />,
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

  const dispatch = useAppDispatch();

  const refferalCodeData = useAppSelector(GET_REFFERRAL_CODE);
  console.log(refferalCodeData, "refferalCodeData");

  const refferalCode = useCallback(async () => {
    const userId = "11";

    try {
      dispatch(AdminThunk.refferralCode({ userId: userId }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    refferalCode();
  }, [refferalCode]);

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
            Add Milestone
          </Button>
        </Box>
      </Box>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            my: 1,
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
    </Container>
  );
}