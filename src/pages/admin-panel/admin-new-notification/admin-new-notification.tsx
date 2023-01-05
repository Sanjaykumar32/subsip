import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";
import { theme } from "theme";
import {
  LocalizationProvider,
  DesktopDatePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { NewNotificationButtonController } from "./admin-new-notifiaction-controller";
import { Form } from "react-router-dom";
import { IBusiness } from "interface";

export function AdminNewNotifictaion() {
  const { getters, handlers } = NewNotificationButtonController();
  const {
    headline,
    date,
    description,
    subCategory,
    businessName,
    category,
    businessLocation,
    businessData,
    categoryData,
    filteredSubCategory,
  } = getters;
  const {
    handleHeadlineChange,
    submitHandler,
    handleDescriptionChange,
    handleDateChange,
    handleCategoryChange,
    handleSubCategoryChange,
    handleBusinessNameChange,
    handleBusinessLocationhange,
  } = handlers;
  console.log(businessLocation, "businessLocation");
  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Container maxWidth="sm" sx={{ my: 1, ml: 0.5 }}>
        <Form onSubmit={submitHandler}>
          <Box sx={{ mt: 2, alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" fontWeight={500}>
                Headline
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
              value={headline}
              onChange={handleHeadlineChange}
            />
          </Box>
          <Box sx={{ mt: 2, alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" fontWeight={500}>
                Description
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
              multiline
              fullWidth
              minRows={2}
              maxRows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 2, alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Date
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={400}
                    sx={{ ml: 1, color: theme.palette.grey[400] }}
                  >
                    *required
                  </Typography>
                </Box>
                <DatePicker
                  disableFuture
                  openTo="year"
                  views={["month", "day", "year"]}
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(
                    params: JSX.IntrinsicAttributes & TextFieldProps
                  ) => <TextField {...params} fullWidth />}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 2, alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Business Location
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
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <FontAwesomeIcon icon={faLocationDot} size="xs" />
                      </IconButton>
                    ),
                  }}
                  value={businessLocation}
                  onChange={handleBusinessLocationhange}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <Typography variant="body2" fontWeight={500}>
                  Category
                </Typography>
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
                <Typography variant="body2" fontWeight={500}>
                  Subcategory
                </Typography>
                <Select
                  variant="outlined"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  size="small"
                  value={subCategory}
                  onChange={handleSubCategoryChange}
                >
                  {filteredSubCategory.map((res: any, i: number) => (
                    <MenuItem value={res.iSubCategoryId} key={i}>
                      {res.vName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <FormControl sx={{ mt: 2 }} fullWidth>
            <Typography variant="body2" fontWeight={500}>
              Business Name
            </Typography>
            <Select
              variant="outlined"
              labelId="sort-by-select-label"
              id="sort-by-simple-select"
              size="small"
              value={businessName}
              onChange={handleBusinessNameChange}
            >
              {businessData.map((res: IBusiness, i: number) => (
                <MenuItem value={res.iBusinessId} key={i}>
                  {res.vName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
              Send Notification
            </Button>
          </Box>
        </Form>
      </Container>
    </Container>
  );
}
