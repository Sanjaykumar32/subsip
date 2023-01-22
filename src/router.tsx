import React from "react";
import { GuestGuard } from "components/guard";
import { AdminGuard } from "components/guard/admin.guard";
import { AuthRoutePathEnum, RoutePathEnum, AdminRoutePathEnum } from "enum";
import { AuthLayout, NavigationBar } from "layouts";
import { AdminLayout } from "layouts/admin-layout";
import {
  Home,
  SignIn,
  SignUp,
  PasswordReset,
  ForgetPassword,
  Profile,
  ClickOnCategory,
  ListingOnPoshSub,
  LocationPage,
  ReferralProgram,
  Rewards,
  AdminNewReferralPrice,
  AdminNewCategory,
  AdminNewNotifictaion,
  AdminNewReward,
  AdminNewSubCategory,
  AdminNotification,
  AdminCategories,
  AdminDashboard,
  AdminListingToSubscribers,
  AdminListing,
  AdminNewlisting,
  AdminReferralToSubscribe,
  AdminReferral,
  AdminRewardToDetails,
  AdminRewardsToWinner,
  AdminRewardsMileStones,
  AdminSubCategory,
  AdminSubscribers,
  Subscriptions,
  PasswordChange,
} from "pages";
import { AdminNotifyButton } from "pages/admin-panel/admin-notify-button/admin-notify-button";
import { createBrowserRouter } from "react-router-dom";
import { About } from "about/about";
import TermConditions from "termsConditions/termConditions";
import { PrivacyPolicy } from "privacyPolicy/privacyPolicy";
import { ReferredUserList } from "pages/admin-panel/reffered-list/referred-list";

export const router = createBrowserRouter([
  {
    path: AuthRoutePathEnum.AUTH,
    element: <AuthLayout />,
    errorElement: <div> 404 Page Not Found </div>,
    children: [
      // auth
      {
        path: AuthRoutePathEnum.SIGN_IN,
        element: (
          <GuestGuard>
            <SignIn />
          </GuestGuard>
        ),
      },
      {
        path: AuthRoutePathEnum.SIGN_UP,
        element: (
          <GuestGuard>
            <SignUp />
          </GuestGuard>
        ),
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
      {
        path: RoutePathEnum.ABOUT,
        element: <About />,
      },
      {
        path: RoutePathEnum.TERMS,
        element: <TermConditions />,
      },
      {
        path: RoutePathEnum.PRIVACY,
        element: <PrivacyPolicy />,
      },
      {
        path: AuthRoutePathEnum.CHANGE_PASSWORD,
        element: <PasswordChange />,
      },
    ],
  },
  {
    path: AdminRoutePathEnum.ADMIN,
    element: (
      <AdminGuard>
        <AdminLayout />
      </AdminGuard>
    ),
    errorElement: <div> Some Error Occured </div>,
    children: [
      {
        path: AdminRoutePathEnum.ADMIN,
        element: <AdminDashboard />,
      },
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
      {
        path: AdminRoutePathEnum.REFFERED_USER_LIST,
        element: <ReferredUserList />,
      },
    ],
  },
]);

export default router;
