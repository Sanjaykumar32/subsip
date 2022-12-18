import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

interface IColoredLabelProps {
  title: string;
  color: string;
}

export function ColoredLabel({
  title,
  color,
}: IColoredLabelProps): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        ml: { xs: 1, md: 2 },
        width: { xs: "100%", md: "inherit" },
      }}
    >
      <Box
        sx={{ backgroundColor: color, height: "1rem", width: "1rem", mr: 1 }}
      />
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
}
