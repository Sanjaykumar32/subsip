import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "data";
import { theme } from "theme";

import { AuthLayout, NavigationBar } from "./layouts";
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
  AdminRewardsMileStones,
  AdminRewardsToWinner,
  AdminRewardToDetails,
  AdminSubCategory,
  AdminSubscribers,
  ClickOnCategory,
  Home,
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
import { AdminLayout } from "layouts/admin-panel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <div> 404 Page Not Found </div>,
    children: [
      // auth
      {
        path: "/auth/signIn",
        element: <SignIn />,
      },
      {
        path: "/auth/signUp",
        element: <SignUp />,
      },
      {
        path: "/auth/forgotPassword",
        element: <PasswordReset />,
      },
    ],
  },
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <div> Some Error Occured </div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/listing",
        element: <ClickOnCategory />,
      },
      {
        path: "/listing/add",
        element: <ListingOnPoshSub />,
      },
      {
        path: "/listing/:id",
        element: <LocationPage />,
      },
      {
        path: "/refer",
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
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <div> Some Error Occured </div>,
    children: [
      //admin
      {
        path: "/admin/referral-price",
        element: <AdminNewReferralPrice />,
      },
      {
        path: "/admin/new-category",
        element: <AdminNewCategory />,
      },
      {
        path: "/admin/new-notification",
        element: <AdminNewNotifictaion />,
      },
      {
        path: "/admin/new-rewards",
        element: <AdminNewReward />,
      },
      {
        path: "/admin/new-subcategory",
        element: <AdminNewSubCategory />,
      },
      {
        path: "/admin/notification",
        element: <AdminNotification />,
      },
      {
        path: "/admin/notify-button",
        element: <AdminNotifyButton />,
      },
      {
        path: "/admin/categories",
        element: <AdminCategories />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/listing-to-subscribers",
        element: <AdminListingToSubscribers />,
      },
      {
        path: "/admin/listing",
        element: <AdminListing />,
      },
      {
        path: "/admin/new-listing",
        element: <AdminNewlisting />,
      },
      {
        path: "/admin/referral-to-subscribe",
        element: <AdminReferralToSubscribe />,
      },
      {
        path: "/admin/referrals",
        element: <AdminReferral />,
      },
      {
        path: "/admin/rewards-to-details",
        element: <AdminRewardToDetails />,
      },
      {
        path: "/admin/rewards-to-winner",
        element: <AdminRewardsToWinner />,
      },
      {
        path: "/admin/rewards-milestones",
        element: <AdminRewardsMileStones />,
      },
      {
        path: "/admin/subcategory",
        element: <AdminSubCategory />,
      },
      {
        path: "/admin/subscribers",
        element: <AdminSubscribers />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
