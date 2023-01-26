import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
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
import { AdminRoutePathEnum } from "enum";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "data";
import { GET_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import { AdminThunk } from "data/thunk/admin.thunk";
import { toast } from "react-hot-toast";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export function AdminListing() {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState('')

  async function deleteDatalist(ID: number) {
    setLoader(true);
    await dispatch(AdminThunk.deleteBusiness(ID));
    allBusiness();
    toast.success("Listing Deleted Successfully");
    setLoader(false);
  }

  const columns: GridColDef[] = [
    {
      field: "Profile",
      headerName: "Profile",
      width: 70,
      renderCell: (params) => {
        return (
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
            }}
            src={"http://159.223.194.50:8000/" + params.value}
          />
        );
      },
    },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "Subscribers",
      headerName: "Subscribers",
      width: 200,
      renderCell: (params) => (
        <Link href={AdminRoutePathEnum.ADMIN_SUBSCRIBERS}>{params.value}</Link>
      ),
    },
    {
      field: "Location",
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
              icon={faPen}
              onClick={() => {
                navigate(`/admin/new-listing?id=${params.value[2]}&edit=${true}`);
              }}
            />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteDatalist(params.value[2]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const businessData = useAppSelector(GET_BUSINESS);

  const allBusiness = useCallback(async () => {
    try {
      await dispatch(UserThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allBusiness();
  }, [allBusiness]);

  const rows = businessData?.map((item) => {
    return {
      id: item.iBusinessId,
      Profile: item.vImage,
      Name: item.vName,
      Subscribers: item.subscriberCount + " Subscribers",
      Location: item.vLocation,
      Actions: ["Edit", "Delete", item?.iBusinessId],
    };
  });

  console.log(rows ,'rows');

  const list = rows.filter((el) => {
    return Object.values(el.Name.concat('' , el.Location).toString()).join('').toLowerCase().includes(search.toString().toLowerCase())
  })

  const items1 = businessData?.map((item) => {
    return( {
      id: item.iBusinessId,
      name: item.vName
    })
  })

  const items2 = businessData?.map((item) => {
    return( {
      id: item.iSubCategory,
      name: item.vLocation
    })
  })
   
  const items3 = items1.concat(items2)
  const [indexValue  , setIndex] = useState(false)



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

  return (
    <>
      {loader ?
        <div className="flex justify-center">
          <CircularProgress />
        </div>
        :
        <Container maxWidth={false} disableGutters sx={{ m: 0 }}>

          {/* {loader && */}
          {/* } */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              <Button
                onClick={() => {
                  navigate(AdminRoutePathEnum.ADMIN_NEW_LISTING);
                }}
                size="large"
                sx={{
                  fontWeight: 800,
                  textAlign: "center",
                  height: "35px",
                }}
                color="info"
                variant="contained"
              >
                New Listing
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
              <div className="App w-full mr-2 ">
                <header className="App-header w-full">
                  <div className={`w-full xl:w-[80%] mx-[auto] ${indexValue ? 'z-50' : 'z-0'}` } >
                    <ReactSearchAutocomplete
                      items={items3}
                      onSearch={handleOnSearch}
                      onSelect={handleOnSelect}
                      onClear={handleClear}
                    />
                  </div>
                </header>
              </div>
              <Box>

                <Typography variant="caption" sx={{ mr: 1 }}>
                  Sort By:
                </Typography>
                <FormControl variant="standard">
                  <Select
                    labelId="sort-by-select-label"
                    id="sort-by-simple-select"
                    value="Recommended"
                    size="small"
                    sx={{ fontWeight: 500 }}
                  >
                    <MenuItem value={"Recommended"}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Recommended
                      </Typography>
                    </MenuItem>
                    <MenuItem value={"Oldest"} sx={{ fontWeight: 500 }}>
                      <Typography variant="body2">Oldest</Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box style={{ height: 400, width: "100%" }}>


              <DataGrid
                rows={list}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Container>
        </Container>}
    </>
  );
}
