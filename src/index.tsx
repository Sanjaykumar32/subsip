import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "context/auth.context";
import { store } from "data";
import { theme } from "theme";
import router from "router";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterMoment}>

      <Toaster
        position="top-center"
        reverseOrder={false}
        // toastOptions=[{}]
        toastOptions={{
          // Define default options
          duration: 5000
        }}

      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
