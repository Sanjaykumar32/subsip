import React, { useCallback, useEffect, useState } from "react";
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

import { GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faSliders, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_ALL_SUBSCRIBER_OF_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import toast from "react-hot-toast";

export function AdminSubscribers() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);

  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.allSubscriberOfBussiness({
          userId: userId ? parseInt(userId) : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  async function deleteSubscriber(ID: string) {
    await dispatch(UserThunk.deleteSubscriber({ iSubscriberId: ID }));
    toast.success("Subscriber Deleted Successfully");
    allsubscriberOfBussiness();
  }

  const columns: GridColDef[] = [
    {
      field: "vEmail",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Verified",
      headerName: "Verified",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <VerifiedUserIcon color="success" sx={{ mr: 1 }} />
          {params.value}
        </Box>
      ),
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value[0]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteSubscriber(params.value[1]);
              }}
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  const rowsData = subscribeBusiness.map((item: any) => {
    return {
      id: item.iAdminId,
      vEmail: item.vEmail,
      userID: item.iAdminId,
      Verified: "Verified",
      location: "-",
      Actions: ["Delete", item.iSubscriberId],
    };
  });

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>(() =>
    rowsData.map((r) => r.userID)
  );
  const [selectedRows, setSelectedRows] = useState<any>([]);

  return (
    <Container maxWidth={false} disableGutters sx={{ m: 0 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            color={theme.palette.info.main}
            sx={{ fontWeight: 600 }}
          >
            46,200 Subscribers
          </Typography>
        </Box>
        {/* notification */}
        <Box>
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
            onClick={() =>
              navigate(AdminRoutePathEnum.ADMIN_NOTIFY_BUTTON, {
                state: { id: selectionModel, Notify: true },
              })
            }
          >
            Notify
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
          <Box>
            <FontAwesomeIcon
              icon={faSliders}
              size="sm"
              style={{ marginLeft: "4px" }}
            />
          </Box>

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

        <Box
          style={{
            height: 400,
            width: "100%",
          }}
        >
          <DataGrid
            rows={rowsData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            selectionModel={selectionModel}
            onSelectionModelChange={(e) => {
              setSelectionModel(e);
              const selectedIDs = new Set(e);
              const selectedRows = rowsData.filter((r) =>
                selectedIDs.has(r.userID)
              );
              setSelectedRows(selectedRows);
            }}
            // onSelectionModelChange={setSelectionModel}
          />

          {/* <pre>{JSON.stringify(selectedRows, null, 4)}</pre> */}
        </Box>
      </Container>
    </Container>
  );
}
