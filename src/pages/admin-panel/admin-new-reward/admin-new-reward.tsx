import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AdminBackButton } from "components";
import { theme } from "theme";
import { NewRewardController } from "./admin-new-reward-controller";
import { Form } from "react-router-dom";
import { IBusiness } from "interface";

export function AdminNewReward() {
  const { getters, handlers } = NewRewardController();
  const {
    name,
    category,
    availibility,
    subCategory,
    businessName,
    businessData,
    categoryData,
    filteredSubCategory,
  } = getters;
  const {
    handleNameChange,
    submitHandler,
    handleAvailibityChange,
    handleCategoryChange,
    handleSubCategoryChange,
    handleBusinessNameChange,
  } = handlers;

  const businessFilter = businessData.filter((el)=> el.iCategory == category)
  return (
    <Container maxWidth="lg">
      <AdminBackButton />

      <Container maxWidth="sm" sx={{ mt: 1, ml: 0.5 }}>
        <Form onSubmit={submitHandler}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Typography variant="body2" fontWeight={500}>
                  Name
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField fullWidth value={name} onChange={handleNameChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Typography variant="body2" fontWeight={500}>
                  Availability
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="number"
                value={availibility}
                onChange={handleAvailibityChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Typography variant="body2" fontWeight={500}>
                    Category
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
                  variant="outlined"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  size="small"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  {categoryData?.map((res, i) => (
                    <MenuItem value={res.iCategoryId} key={i}>
                      {res.vName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Subcategory
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
                  variant="outlined"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  size="small"
                  value={subCategory}
                  onChange={handleSubCategoryChange}
                >
                  {filteredSubCategory?.map((res, i) => (
                    <MenuItem value={res.iSubCategoryId} key={i}>
                      {res.vName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <FormControl sx={{ mt: 2 }} fullWidth>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" fontWeight={500}>
                Business name
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
              variant="outlined"
              labelId="sort-by-select-label"
              id="sort-by-simple-select"
              size="small"
              value={businessName}
              onChange={handleBusinessNameChange}
            >
              {businessFilter?.map((res: IBusiness, i: number) => (
                <MenuItem value={res.iBusinessId} key={i}>
                  {res.vName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box
            sx={{
              mt: 2,
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
                color: theme.palette.common.white,
              }}
              variant="rounded"
              type="submit"
            >
              Add reward
            </Button>
          </Box>
        </Form>
      </Container>
    </Container>
  );
}
