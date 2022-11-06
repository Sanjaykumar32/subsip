import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "data";
import { theme } from "theme";

import { NavigationBar } from "./layouts";
import {
  AdminCategories,
  AdminDashboard,
  AdminListing,
  AdminListingToSubscribers,
  AdminNewCategory,
  AdminNewlisting,
  AdminNewNotifictaion,
  AdminNewReferralPrice,
  AdminNewReward,
  AdminNewSubCategory,
  AdminNotification,
  AdminReferral,
  AdminReferralToSubscribe,
  AdminRewards,
  AdminRewardsToWinner,
  AdminRewardToDetails,
  AdminSubCategory,
  AdminSubscribers,
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
  LocationPage,
} from "./pages";

import { AdminNotifyButton } from "pages/admin-panel/admin-notify-button";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <div> 404 Page Not Found </div>,
    children: [
      // auth
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/PasswordReset",
        element: <PasswordReset />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },

      // pages
      {
        path: "/home",
        element: <Home />,
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

      //admin
      {
        path: "/AdminCategories",
        element: <AdminCategories />,
      },
      {
        path: "/AdminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/AdminListingToSubscribers",
        element: <AdminListingToSubscribers />,
      },
      {
        path: "/AdminListing",
        element: <AdminListing />,
      },
      {
        path: "/AdminNewCategory",
        element: <AdminNewCategory />,
      },
      {
        path: "/AdminNewlisting",
        element: <AdminNewlisting />,
      },
      {
        path: "/AdminNewNotifictaion",
        element: <AdminNewNotifictaion />,
      },
      {
        path: "/AdminNewReferralPrice",
        element: <AdminNewReferralPrice />,
      },
      {
        path: "/AdminNewReward",
        element: <AdminNewReward />,
      },
      {
        path: "/AdminNewSubcategory",
        element: <AdminNewSubCategory />,
      },
      {
        path: "/AdminNotification",
        element: <AdminNotification />,
      },
      {
        path: "/AdminNotifyButton",
        element: <AdminNotifyButton />,
      },
      {
        path: "/AdminReferralToSubscribe",
        element: <AdminReferralToSubscribe />,
      },
      {
        path: "/AdminReferral",
        element: <AdminReferral />,
      },
      {
        path: "/AdminRewardToDetails",
        element: <AdminRewardToDetails />,
      },
      {
        path: "/AdminRewardsToWinner",
        element: <AdminRewardsToWinner />,
      },
      {
        path: "/AdminRewards",
        element: <AdminRewards />,
      },
      {
        path: "/AdminSubCategory",
        element: <AdminSubCategory />,
      },
      {
        path: "/AdminSubscribers",
        element: <AdminSubscribers />,
      },
      {
        path: "/location/:id",
        element: <LocationPage />,
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
