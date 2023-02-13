import React, { useState } from "react";
import {
  Box,
  Button,
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
import { CategoryController } from "./admin-categories.controller";
import { useAppSelector } from "data";
import { GET_CATEGORY } from "data/selectors";
import { ICategoryData } from "interface";
import { AdminThunk } from "data/thunk/admin.thunk";

export function AdminCategories() {
  const categoryData = useAppSelector(GET_CATEGORY);
  const navigate = useNavigate();
  const { getters, handlers } = CategoryController();
  const { attributes } = getters;
  const { deleteCategorylist } = handlers;
  const [sortValue, setSortValue] = useState('A-Z')

  const columns: GridColDef[] = [
    {
      field: "vName",
      headerName: "Name",
      width: 250,
    },
    {
      field: "subCategoryName",
      headerName: "subcategory",
      width: 250,
      renderCell: (params) => (
        <Link
          href={
            AdminRoutePathEnum.ADMIN_SUBCATEGORY +
            `?category=${params.value[1]}`
          }
        >
          {params.value[0]}
        </Link>
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
             className=" cursor-pointer"
              icon={faPen}
              onClick={() => {
                navigate("/admin/new-category", {
                  state: { id: params?.row?.iCategoryId, edit: true },
                });
              }}
            />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteCategorylist(params.value[2]);
              }}
              className="ml-[25px]  cursor-pointer"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows : any = categoryData?.map(function (res: ICategoryData, index: number) {
    return {
      id: index + 1,
      iCategoryId: res.iCategoryId,
      vName: res.vName ? res.vName : "",
      subCategoryName: [
        res.subCategoryCount ? res.subCategoryCount : 0,
        res.iCategoryId,
      ],
      Actions: ["Edit", "Delete", res?.iCategoryId],
    };
  });

  const sortedValue = rows?.slice()?.sort((a: any, b: any) => {
    if (sortValue == 'A-Z') {
      return a.vName.toString().toLowerCase().charCodeAt() - b.vName.toString().toLowerCase().charCodeAt()
    } else if (sortValue == 'Z-A') {
      return b.vName.toString().toLowerCase().charCodeAt() - a.vName.toString().toLowerCase().charCodeAt()
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
            onClick={() => {
              navigate(AdminRoutePathEnum.ADMIN_NEW_CATEGORY);
            }}
          >
            New Category
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
