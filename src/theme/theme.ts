import { createTheme } from "@mui/material";
import { LinkComponent } from "./router-link";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFBA5C",
    },
    secondary: {
      main: "#108DFA",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-seris"].join(","),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded" },
          style: ({ theme }) => ({
            padding: theme.spacing(0.5, 3),
            backgroundColor: theme.palette.primary.main,
            borderRadius: "100px",
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          }),
        },
        {
          props: { variant: "rounded", color: "error" },
          style: ({ theme }) => ({
            padding: theme.spacing(0.5, 3),
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            borderRadius: "100px",
            "&:hover": {
              backgroundColor: theme.palette.error.dark,
            },
          }),
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "600",
          fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "alternet" },
          style: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
            fontWeight: "700",
            fontSize: "1.938rem",
            fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
          }),
        },
      ],
    },
    ...LinkComponent,
  },
});

declare module "@mui/material" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
  interface TypographyPropsVariantOverrides {
    alternet: true;
  }
}
