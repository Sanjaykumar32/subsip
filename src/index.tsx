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
  ForgetPassword,
} from "./pages";

import { AdminNotifyButton } from "pages/admin-panel/admin-notify-button";

import reportWebVitals from "./reportWebVitals";
import { AdminLayout } from "components/admin-layout";
import { AdminRoutePathEnum, AuthRoutePathEnum, RoutePathEnum } from "enum";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: AuthRoutePathEnum.AUTH,
    element: <AuthLayout />,
    errorElement: <div> 404 Page Not Found </div>,
    children: [
      // auth
      {
        path: AuthRoutePathEnum.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: AuthRoutePathEnum.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: AuthRoutePathEnum.PASSWORD_RESET,
        element: <PasswordReset />,
      },
      {
        path: AuthRoutePathEnum.FORGET_PASSWORD,
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: RoutePathEnum.HOME,
    element: <NavigationBar />,
    errorElement: <div> Some Error Occured </div>,
    children: [
      {
        path: RoutePathEnum.HOME,
        element: <Home />,
      },
      {
        path: RoutePathEnum.PROFILE,
        element: <Profile />,
      },
      {
        path: RoutePathEnum.LISTING,
        element: <ClickOnCategory />,
      },
      {
        path: RoutePathEnum.LISTING_ADD,
        element: <ListingOnPoshSub />,
      },
      {
        path: RoutePathEnum.LISTING_PRODUCT,
        element: <LocationPage />,
      },
      {
        path: RoutePathEnum.REFER,
        element: <ReferralProgram />,
      },
      {
        path: RoutePathEnum.REWARDS,
        element: <Rewards />,
      },
      {
        path: RoutePathEnum.SUBSCRIPTIONS,
        element: <Subscriptions />,
      },
    ],
  },
  {
    path: AdminRoutePathEnum.ADMIN,
    element: <AdminLayout />,
    errorElement: <div> Some Error Occured </div>,
    children: [
      {
        path: AdminRoutePathEnum.ADMIN_REFERRAL_PRICE,
        element: <AdminNewReferralPrice />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NEW_CATEGORY,
        element: <AdminNewCategory />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NEW_NOTIFICTAION,
        element: <AdminNewNotifictaion />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NEW_REWARDS,
        element: <AdminNewReward />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NEW_SUBCATEGORY,
        element: <AdminNewSubCategory />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NOTIFICATION,
        element: <AdminNotification />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NOTIFY_BUTTON,
        element: <AdminNotifyButton />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_CATEGORY,
        element: <AdminCategories />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_DASHBOARD,
        element: <AdminDashboard />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_LISTING_TO_SUBSCRIBERS,
        element: <AdminListingToSubscribers />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_LISTING,
        element: <AdminListing />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_NEW_LISTING,
        element: <AdminNewlisting />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_REFERRAL_TO_SUBSCRIBE,
        element: <AdminReferralToSubscribe />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_REFERRALS,
        element: <AdminReferral />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_REWARDS_TO_DETAILS,
        element: <AdminRewardToDetails />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_REWARDS_TO_WINNERS,
        element: <AdminRewardsToWinner />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_MILESTONES,
        element: <AdminRewardsMileStones />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_SUBCATEGORY,
        element: <AdminSubCategory />,
      },
      {
        path: AdminRoutePathEnum.ADMIN_SUBSCRIBERS,
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
