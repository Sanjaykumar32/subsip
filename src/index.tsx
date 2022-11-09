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
        path: "/passwordReset",
        element: <PasswordReset />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      // pages
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/clickOnCategory",
        element: <ClickOnCategory />,
      },
      {
        path: "/listingOnPoshSub",
        element: <ListingOnPoshSub />,
      },
      {
        path: "/listingDetails",
        element: <ListingDetails />,
      },
      {
        path: "/referralProgram",
        element: <ReferralProgram />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/location/:id",
        element: <LocationPage />,
      },

      //admin
      {
        path: "/admin/newReferralPrice",
        element: <AdminNewReferralPrice />,
      },
      {
        path: "/admin/newCategory",
        element: <AdminNewCategory />,
      },
      {
        path: "/admin/newNotifictaion",
        element: <AdminNewNotifictaion />,
      },
      {
        path: "/admin/newReward",
        element: <AdminNewReward />,
      },
      {
        path: "/admin/newSubcategory",
        element: <AdminNewSubCategory />,
      },
      {
        path: "/admin/notification",
        element: <AdminNotification />,
      },
      {
        path: "/admin/notifyButton",
        element: <AdminNotifyButton />,
      },
      // {
      //   path: "/admin/categories",
      //   element: <AdminCategories />,
      // },
      // {
      //   path: "/admin/dashboard",
      //   element: <AdminDashboard />,
      // },
      // {
      //   path: "/admin/listingToSubscribers",
      //   element: <AdminListingToSubscribers />,
      // },
      // {
      //   path: "/admin/listing",
      //   element: <AdminListing />,
      // },
      // {
      //   path: "/admin/newlisting",
      //   element: <AdminNewlisting />,
      // },
      // {
      //   path: "/admin/referralToSubscribe",
      //   element: <AdminReferralToSubscribe />,
      // },
      // {
      //   path: "/admin/referral",
      //   element: <AdminReferral />,
      // },
      // {
      //   path: "/admin/rewardToDetails",
      //   element: <AdminRewardToDetails />,
      // },
      // {
      //   path: "/admin/rewardsToWinner",
      //   element: <AdminRewardsToWinner />,
      // },
      // {
      //   path: "/admin/rewards",
      //   element: <AdminRewards />,
      // },
      {
        path: "/admin/subCategory",
        element: <AdminSubCategory />,
      },
      // {
      //   path: "/admin/subscribers",
      //   element: <AdminSubscribers />,
      // },
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
