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
import { useLocation, useNavigate } from "react-router-dom";
import { AdminRoutePathEnum } from "enum";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_ALL_SUBSCRIBER, GET_ALL_SUBSCRIBER_OF_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import toast from "react-hot-toast";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export function AdminSubscribers() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);
  const [search, setSearch] = useState('')
  const [indexValue, setIndex] = useState(false)
  const location =  useLocation()

  const getAllsubcriber =  useAppSelector(GET_ALL_SUBSCRIBER)

  const routeValue = location?.state?.ids?.split(',')

  console.log(getAllsubcriber , 'getAllsubcriber');

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


  const getallsubscribe = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.getAllsubscribe()
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

  useEffect(()=>{
    getallsubscribe()
  },[getallsubscribe])

  const filter = getAllsubcriber?.filter((el) => {
    return Object.values(el.vEmail.toLowerCase()).join('').toString().includes(search.toString().toLowerCase())
  })

  const rows = getAllsubcriber?.filter((el)=> routeValue?.includes(el.iAdminId.toString()))

  const rowsDataSingle =  rows.map((item)=>{
    return {
      id: item.iAdminId,
      vEmail: item.vEmail,
      userID: item.iAdminId,
      Verified: "Verified",
      location: "-",
      Actions: ["Delete", item.iSubscriberId],
      
    }
  })
  
  const rowsData = filter?.map((item: any) => {
    return {
      id: item.iAdminId,
      vEmail: item.vEmail,
      userID: item.iAdminId,
      Verified: "Verified",
      location: "-",
      Actions: ["Delete", item.iSubscriberId],
    };
  });


  console.log(rows ,'fil')

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>(() =>
    rowsData.map((r) => r.userID)
  );
  const [selectedRows, setSelectedRows] = useState<any>([]);

  const items2 = rowsData?.map((item , index) => {
    return ({
      id: index,
      name: item.vEmail
    })
  })

  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results, 'serach and results')
    setSearch(string)
    setIndex(true)
  }

  const handleOnSelect = (item: any) => {
    console.log(item, 'select vlaue')
    setSearch(item.name)
    setIndex(true)
  }

  const handleClear = () => {
    setSearch('')
    setIndex(false)
  }

  console.log(routeValue , 'routeValue');

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
            {getAllsubcriber.length} Subscribers
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


          <div className="App w-full mr-2">
            <div className={`w-full xl:w-[80%] mx-[auto] `} >
              <ReactSearchAutocomplete
                items={items2}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                onClear={handleClear}
              />
            </div>
          </div>

        </Box>

        <Box
          style={{
            height: 400,
            width: "100%",
          }}
        >
          <DataGrid
            rows={routeValue == undefined ?  rowsData : rowsDataSingle}
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
