import { APP_ROUTER_PATH } from "@/const";
import { AppLayout } from "@/layout";
import {
  AppErrorPage,
  AppMainPage,
  AppSecondPage,
  AppThirdPage,
} from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={APP_ROUTER_PATH.MAIN} replace /> },
      { path: APP_ROUTER_PATH.MAIN, element: <AppMainPage /> },
      { path: APP_ROUTER_PATH.SECOND, element: <AppSecondPage /> },

      { path: APP_ROUTER_PATH.THIRD, element: <AppThirdPage /> },

      {
        path: APP_ROUTER_PATH.ERROR,
        element: <AppErrorPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to={APP_ROUTER_PATH.ERROR} replace /> },
]);

export default router;
