import { ReactElement } from "react";
import { Typography } from "@mui/material";

export function Logo(): ReactElement {
  return (
    <Typography
      fontWeight={700}
      sx={{
        fontSize: "37px",
        lineHeight: "48px",
      }}
    >
      PoshSub
    </Typography>
  );
}
