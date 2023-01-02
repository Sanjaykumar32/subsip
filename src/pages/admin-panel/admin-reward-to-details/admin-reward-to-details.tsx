import React, { useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";
import { AdminRoutePathEnum } from "enum";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSINESS_REWARDS } from "data/selectors";
import { useSearchParams } from "react-router-dom";
import { IBusinessReward } from "interface";
import toast from "react-hot-toast";

export function AdminRewardToDetails() {
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");

  const businessRewardData = useAppSelector(GET_BUSINESS_REWARDS);
  const [searchParams] = useSearchParams();
  const bussinessId = searchParams.get("businessId");

  const businessReward = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getBusinessReward({
          businessId: bussinessId ? parseInt(bussinessId) : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const rows = businessRewardData.map((item: IBusinessReward) => {
    return {
      id: item.userId,
      rewardName: item.rewardName,
      Actions: ["Edit", "Delete", item?.rewardId],
    };
  });

  useEffect(() => {
    businessReward();
  }, [businessReward]);

  async function deleteRewardlist(ID: number) {
    await dispatch(AdminThunk.deleteReward({ rewardId: ID }));
    toast.success("Reward Delete SuccessFully");
    businessReward();
  }

  const columns: GridColDef[] = [
    {
      field: "rewardName",
      headerName: "Name",
      width: 200,
    },
    // {
    //   field: "Reward",
    //   headerName: "Rewards",
    //   width: 200,
    //   renderCell: (params) => <Chip label={params.value} color="info" />,
    // },
    // {
    //   field: "Status",
    //   headerName: "Status",
    //   width: 200,
    //   renderCell: (params) => <Chip label={params.value} color="success" />,
    // },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faPen} />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteRewardlist(params.value[2]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
    // {
    //   field: "Active",
    //   headerName: "Active",
    //   width: 150,
    //   renderCell: (params) => (
    //     <Box>
    //       <Tooltip title={params.value}>
    //         <Switch {...label} defaultChecked size="small" color="info" />
    //       </Tooltip>
    //     </Box>
    //   ),
    // },
  ];

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
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 800 }}>
            India Gate Restaurant
          </Typography>
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
