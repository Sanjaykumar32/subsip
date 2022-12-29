import React from "react";
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
  const naviagate = useNavigate();
  const { getters, handlers } = CategoryController();
  const { attributes } = getters;
  const { deleteCategorylist } = handlers;

  const columns: GridColDef[] = [
    {
      field: "vName",
      headerName: "Name",
      width: 200,
    },
    {
      field: "subCategoryName",
      headerName: "subcategory",
      width: 200,
      renderCell: (params) => (
        <Link
          href={
            AdminRoutePathEnum.ADMIN_SUBCATEGORY +
            `?subCategory=${params.value[1]}`
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
          <Tooltip title={params.value}>
            <FontAwesomeIcon icon={faPen} />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteCategorylist(params.value[2]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = categoryData.map(function (res: ICategoryData, index: number) {
    return {
      id: index + 1,
      iCategoryId: res.iCategoryId,
      vName: res.vName ? res.vName : "",
      subCategoryName: [
        res.subCategoryName ? res.subCategoryName : "",
        res.iCategoryId,
      ],
      Actions: ["Edit", "Delete", res?.iCategoryId],
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
            onClick={() => {
              naviagate(AdminRoutePathEnum.ADMIN_NEW_CATEGORY);
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
