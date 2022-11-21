import React, { ReactElement } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Logo(): ReactElement {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/home");
      }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: theme.typography.pxToRem(27),
          lineHeight: "48px",
        }}
      >
        PoshSub
      </Typography>
    </Button>
  );
}
