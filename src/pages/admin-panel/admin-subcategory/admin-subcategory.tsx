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
import { AdminBackButton } from "components";
import { AdminRoutePathEnum } from "enum";
import { useNavigate } from "react-router-dom";
import { SubCategoryController } from "./admin-subcategory-controller";

export function AdminSubCategory() {
  const navigate = useNavigate();
  const { getters, handlers } = SubCategoryController();
  const { attributes, id, CategoryName } = getters;
  const { deleteSubCategorylist } = handlers;
  const columns: GridColDef[] = [
    {
      field: "vName",
      headerName: "vName",
      width: 200,
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
                navigate(
                  `${AdminRoutePathEnum.ADMIN_NEW_SUBCATEGORY}?category=${params.value[2]}&subCategoryId=${params.value[3]}`
                );
              }}
            />
          </Tooltip>
          <Tooltip title={params.value[1]}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteSubCategorylist(params.value[3]);
              }}
              className="ml-[25px]"
            />
          </Tooltip>
        </Box>
      ),
    },
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
              navigate(
                `${AdminRoutePathEnum.ADMIN_NEW_SUBCATEGORY}/?category=${id}`
              );
            }}
          >
            New subcategory
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
          <Typography variant="body1" sx={{ fontWeight: 800 }}>
            Category: {CategoryName?.vName}
          </Typography>

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
            rows={attributes}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </Container>
  );
}
