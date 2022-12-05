import { HomePage } from "../pages/home/HomePage";
import { TripPage } from "../pages/trip/TripPage";
import { SignInPage } from "../pages/signin/SignInPage";
import {SignUpPage } from "../pages/signup/SignUpPage";

import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <HomePage />,
  },
  {
    icon: UserCircleIcon,
    name: "trips",
    path: "/trips",
    element: <TripPage />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignInPage/>,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUpPage />,
  },
];

export default routes;
