import React from "react";
import { Box, Typography, TypographyProps, styled } from "@mui/material";

export const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
}));

export function Label(props: TypographyProps) {
  return (
    <Typography
      fontWeight={700}
      variant="body2"
      {...props}
      style={{ margin: "4px 0px" }}
    >
      {props.children}
    </Typography>
  );
}
