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
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { GET_REFERRAL_LIST } from "data/selectors";
import { useNavigate } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";
import toast from "react-hot-toast";

export function AdminReferral() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const referralData = useAppSelector(GET_REFERRAL_LIST);

  async function deleteDataReferral(ID: number) {
    await dispatch(AdminThunk.deleteReferralPrice(ID));
    referralList();
    toast.success("Listing Delete SuccessFully");
  }

  const columns: GridColDef[] = [
    {
      field: "MilestoneName",
      headerName: "Milestone hhhhName",
      width: 200,
    },

    {
      field: "Amount",
      headerName: "Amount",
      width: 200,
      renderCell: (params) => (
        <Chip label={params.value[1] + " / " + params.value[0]} color="info" />
      ),
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value[0]}>
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => {
                navigate("/admin/referral-price", {
                  state: { id: params.value[2], edit: true },
                });
              }}
            />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteDataReferral(params.value[2]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const referralList = useCallback(async () => {
    try {
      await dispatch(AdminThunk.refferalDetail());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    referralList();
  }, [referralList]);

  console.log(referralData, "referralData");

  const rows = referralData.map((item: any) => {
    return {
      id: item?.iMilestoneId,
      MilestoneName: item?.milestoneName,
      Amount: [item?.iAmount, item?.userCount],
      Actions: ["Edit", "Dalete", item?.iMilestoneId],
    };
  });

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
            onClick={() => navigate(AdminRoutePathEnum.ADMIN_REFERRAL_PRICE)}
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
