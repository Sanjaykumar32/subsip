import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { AdminBackButton } from "components";
import { theme } from "theme";

export function AdminNewCategory() {
  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Container maxWidth="xs" sx={{ m: 0 }}>
        <Box sx={{ my: 4, alignItems: "center" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" fontWeight={500}>
              Category Name
            </Typography>
            <Typography
              variant="caption"
              fontWeight={400}
              sx={{ ml: 1, color: theme.palette.grey[400] }}
            >
              *required
            </Typography>
          </Box>
          <TextField fullWidth sx={{ my: 1, borderRadius: "30px", mr: 1 }} />
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
          >
            Add Category
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
