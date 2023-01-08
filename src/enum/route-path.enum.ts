export enum AuthRoutePathEnum {
  AUTH = "/auth",
  SIGN_IN = "/auth/sign-in",
  SIGN_UP = "/auth/sign-up",
  PASSWORD_RESET = "/auth/password-reset",
  FORGET_PASSWORD = "/auth/forget-password",
  CHANGE_PASSWORD = "/auth/change-password",
}

export enum AdminRoutePathEnum {
  ADMIN = "/admin",
  ADMIN_REFERRAL_PRICE = "/admin/referral-price",
  ADMIN_NEW_NOTIFICTAION = "/admin/new-notification",
  ADMIN_NEW_REWARDS = "/admin/new-rewards",
  ADMIN_NEW_SUBCATEGORY = "/admin/subcategory/add",
  ADMIN_NOTIFY_BUTTON = "/admin/notify-button",
  ADMIN_NEW_CATEGORY = "/admin/new-category",
  ADMIN_CATEGORY = "/admin/category",
  ADMIN_DASHBOARD = "/admin/dashboard",
  ADMIN_LISTING_TO_SUBSCRIBERS = "/admin/listing-to-subscribers",
  ADMIN_LISTING = "/admin/listing",
  ADMIN_NEW_LISTING = "/admin/new-listing",
  ADMIN_REFERRAL_TO_SUBSCRIBE = "/admin/referral-to-subscribe",
  ADMIN_REFERRALS = "/admin/referrals",
  ADMIN_REWARDS_TO_DETAILS = "/admin/rewards-to-details",
  ADMIN_REWARDS_TO_WINNERS = "/admin/rewards-to-winner",
  ADMIN_MILESTONES = "/admin/milestones",
  ADMIN_SUBCATEGORY = "/admin/subcategory",
  ADMIN_NOTIFICATION = "/admin/notification",
  ADMIN_SUBSCRIBERS = "/admin/subscribers",
}

export enum RoutePathEnum {
  HOME = "/",
  LISTING = "/category/:id",
  REWARDS = "/rewards",
  SUBSCRIPTIONS = "/subscriptions",
  REFER = "/refer",
  PROFILE = "/profile",
  LISTING_ADD = "/listing/add",
  LISTING_PRODUCT = "/listing/:id",
  NONE = "",
  ABOUT = "/about",
}
