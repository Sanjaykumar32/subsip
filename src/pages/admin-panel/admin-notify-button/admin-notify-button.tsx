import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

import { AdminBackButton } from "components";
import { theme } from "theme";
import { NewNotifyButtonController } from "./admin-notify-button.controller";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Form } from "react-router-dom";

export function AdminNotifyButton() {
  const { getters, handlers } = NewNotifyButtonController();
  const { headline, date, description } = getters;
  const {
    handleHeadlineChange,
    submitHandler,
    handleDescriptionChange,
    handleDateChange,
  } = handlers;

  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
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
              sx={{ my: 1, mr: 1 }}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={date}
                onChange={handleDateChange}
                renderInput={(
                  params: JSX.IntrinsicAttributes & TextFieldProps
                ) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
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
              Add Milestone
            </Button>
          </Box>
        </Form>
      </Container>
    </Container>
  );
}
