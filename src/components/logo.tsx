import { ReactElement } from "react";
import { Typography, useTheme } from "@mui/material";

export function Logo(): ReactElement {
  const theme = useTheme();

  return (
    <Typography
      fontWeight={700}
      sx={{
        fontSize: theme.typography.pxToRem(27),
        lineHeight: "48px",
      }}
    >
      PoshSub
    </Typography>
  );
}
