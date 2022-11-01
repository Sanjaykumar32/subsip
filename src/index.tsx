import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NavigationBar } from "./layouts";
import {
  ClickOnCategory,
  Home,
  ListingDetails,
  ListingOnPoshSub,
  PasswordReset,
  Profile,
  ReferralProgram,
  Rewards,
  SignIn,
  SignUp,
  Subscriptions,
} from "./pages";
import { store } from "data";
import { theme } from "theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <div> 404 Page Not Found </div>,
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/PasswordReset",
        element: <PasswordReset />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/ClickOnCategory",
        element: <ClickOnCategory />,
      },
      {
        path: "/ListingOnPoshSub",
        element: <ListingOnPoshSub />,
      },
      {
        path: "/ListingDetails",
        element: <ListingDetails />,
      },
      {
        path: "/ReferralProgram",
        element: <ReferralProgram />,
      },
      {
        path: "/Rewards",
        element: <Rewards />,
      },
      {
        path: "/Subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
