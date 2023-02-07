import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";

import { GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { AdminBackButton } from "components";
import { useAppDispatch, useAppSelector } from "data";
import { GET_REFERRAL_USER, GET_USER } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";

export function ReferredUserList() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const userdata = useAppSelector(GET_USER);
  const navigate = useNavigate();
  const location = useLocation();

  const referralData = useAppSelector(GET_REFERRAL_USER);

  const columns: GridColDef[] = [
    {
      field: "vEmail",
      headerName: "Email",
      width: 200,
    },
  ];

  const filter = referralData.filter((item) => {
    return item.iMilestoneId == location.state.id;
  });

  const rows =
    filter &&
    filter[0]?.users.map((res: any) => {
      return { id: res?.iAdminId, vEmail: res?.vEmail };
    });

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>(() =>
    rows.map((r: any) => r.id)
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
        <AdminBackButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
              state: { id: selectionModel, Notify: true, rewardScreen: true },
            })
          }
        >
          Notify
        </Button>
      </Box>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box
          style={{
            height: 400,
            width: "100%",
            marginTop: "5px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            selectionModel={selectionModel}
            onSelectionModelChange={(e) => {
              setSelectionModel(e);
              const selectedIDs = new Set(e);
              const selectedRows = rows.filter((r: any) =>
                selectedIDs.has(r.id)
              );
              setSelectedRows(selectedRows);
            }}
          />
        </Box>
      </Container>
    </Container>
  );
}
