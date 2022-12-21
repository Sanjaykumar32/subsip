import { Paper, styled } from "@mui/material";

export * from "./links";
export * from "./social";

export const FooterContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: "#2C2E30",
  color: theme.palette.getContrastText("#2C2E30"),
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "left",
  marginTop: "auto",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2, 0),
    flexDirection: "column",
  },
}));
