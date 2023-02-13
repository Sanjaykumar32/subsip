import React, { useState } from "react";
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
  const [sortValue, setSortValue] = useState('A-Z')

  const columns: GridColDef[] = [
    {
      field: "vHeadline",
      headerName: "Name",
      width: 250,
    },
    {
      field: "vDesc",
      headerName: "Description",
      width: 250,
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
              className="ml-[25px] cursor-pointer "
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows :any = notificationData.map((item: INotificationdata) => {
    return {
      id: item?.iNotificationId,
      vHeadline: item?.vHeadline,
      vDesc: item?.vDesc,
      Actions: ["Edit", "Delete", item?.iNotificationId],
    };
  });

  const sortedValue = rows?.slice()?.sort((a: any, b: any) => {
    if (sortValue == 'A-Z') {
      return a.vHeadline.toString().toLowerCase().charCodeAt() - b.vHeadline.toString().toLowerCase().charCodeAt()
    } else if (sortValue == 'Z-A') {
      return b.vHeadline.toString().toLowerCase().charCodeAt() - a.vHeadline.toString().toLowerCase().charCodeAt()
    }
  })

  const handleSort = (e: any) => {
    setSortValue(e.target.value)
  }


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
              Sort By
            </Typography>
            <FormControl variant="standard">
              <Select
                 onChange={handleSort}
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                value={sortValue}
                size="small"
                sx={{ fontWeight: 500 }}
              >
                <MenuItem value={"A-Z"}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    A-Z
                  </Typography>
                </MenuItem>
                <MenuItem value={"Z-A"} sx={{ fontWeight: 500 }}>
                  <Typography variant="body2">Z-A</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box style={{ height: 400, width: "100%", marginTop: "5px" }}>
          <DataGrid
          disableSelectionOnClick
            rows={sortedValue}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </Container>
  );
}
