import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AdminBackButton } from "components";
import { AddSubCategoryController } from "./admin-new-subcategory.controller";
import { Form, useSearchParams } from "react-router-dom";

export function AdminNewSubCategory() {
  const theme = useTheme();
  const { getters, handlers } = AddSubCategoryController();
  const { subCategory, businessName, categoryData } = getters;
  const { submitHandler, handleCategoryChange, handleBusinessNameChange } =
    handlers;
  const [searchParams] = useSearchParams();
  const subCategoryId = searchParams.get("subCategoryId");

  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <AdminBackButton />
      <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
        <Form onSubmit={submitHandler}>
          <Box sx={{ my: 2 }}>
            <FormControl fullWidth>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Select Business Category
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <Select
                fullWidth
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
                sx={{ my: 1 }}
                value={businessName}
                onChange={handleBusinessNameChange}
              >
                {categoryData.map((res, i) => (
                  <MenuItem value={res.iCategoryId} key={i}>
                    {res.vName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ my: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Subcategory Name
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  fullWidth
                  sx={{ my: 1 }}
                  value={subCategory}
                  onChange={handleCategoryChange}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  size="lg"
                  color="black"
                  style={{ marginLeft: theme.spacing(1) }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              my: 2,
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="large"
              sx={{
                fontWeight: 800,
                backgroundColor: theme.palette.info.main,
                color: "white",
              }}
              variant="rounded"
              type="submit"
            >
              {subCategoryId ? "Update Subcategory" : "Add Subcategory"}
            </Button>
          </Box>
        </Form>
      </Container>
    </Container>
  );
}
