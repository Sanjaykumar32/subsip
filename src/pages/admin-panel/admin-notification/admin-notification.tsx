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
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminRoutePathEnum } from "enum";
import { useNavigate } from "react-router-dom";
import { AdminNotificationController } from "./admin-notification-controller";
import { INotificationdata } from "interface";

export function AdminNotification() {
  const navigate = useNavigate();
  const { getters, handlers } = AdminNotificationController();
  const { notificationData } = getters;
  const { deleteNotification } = handlers;

  const columns: GridColDef[] = [
    {
      field: "vHeadline",
      headerName: "Name",
      width: 200,
    },
    {
      field: "vDesc",
      headerName: "Description",
      width: 200,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteNotification(params.value[2]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = notificationData.map((item: INotificationdata) => {
    return {
      id: item.iNotificationId,
      vHeadline: item.vHeadline,
      vDesc: item.vDesc,
      Actions: ["Edit", "Delete", item?.iNotificationId],
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
            onClick={() => navigate(AdminRoutePathEnum.ADMIN_NEW_NOTIFICTAION)}
          >
            New Notification
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
