import React, { useCallback, useEffect ,useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Link,
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
import { useNavigate } from "react-router-dom";
import { AdminRoutePathEnum, RoutePathEnum } from "enum";
import toast from "react-hot-toast";
import { GET_REFERRAL_USER } from "data/selectors";

export function AdminReferral() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const referralData = useAppSelector(GET_REFERRAL_USER);
  const [sortValue, setSortValue] = useState('A-Z')

  async function deleteDataReferral(ID: number) {
    await dispatch(AdminThunk.deleteReferralPrice(ID));
    referralList();
    toast.success("Listing Deleted Successfully");
  }

  const userData = (id: any) => {
    navigate(`${AdminRoutePathEnum.REFFERED_USER_LIST}`, {
      state: {
        id: id,
        referralScreen: "referralScreen",
      },
    });
  };

  const columns: GridColDef[] = [
    {
      field: "vName",
      headerName: "Milestone Name",
      width: 250,
    },

    {
      field: "iamount",
      headerName: "Amount",
      width: 250,
      renderCell: (params: any) => {
        console.log(params, "params");
        return params.value ? (
          <Chip
            label={params.value}
            color="info"
            onClick={() => userData(params.id)}
          />
        ) : (
          "-"
        );
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.value[0]}>
            <FontAwesomeIcon
            className=" cursor-pointer"
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
              className="ml-[25px] cursor-pointer"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const referralList = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getReferralUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    referralList();
  }, [referralList]);

  const rows:any = referralData.map((item: any) => {
    return {
      id: item?.iMilestoneId,
      vName: item?.vName,
      iamount: item?.iamount,
      users: item?.users,
      Actions: ["Edit", "Dalete", item?.iMilestoneId],
    };
  });

  const sorted = rows?.slice()?.sort((a: any, b: any) => {
    if (sortValue == 'A-Z') {
      return a.vName.toString().toLowerCase().charCodeAt() - b.vName.toString().toLowerCase().charCodeAt()
    } else if (sortValue == 'Z-A') {
      return b.vName.toString().toLowerCase().charCodeAt() - a.vName.toString().toLowerCase().charCodeAt()
    }
  })

  const handleSort = (e:any)=>{
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
              Sort By
            </Typography>
            <FormControl variant="standard">
              <Select
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                value={sortValue}
                size="small"
                sx={{ fontWeight: 500 }}
                onChange={handleSort}
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
            rows={sorted}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </Container>
  );
}
