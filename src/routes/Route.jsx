import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import DonateSuccess from "../pages/donate-page/DonateSuccess";
import DonateFail from "../pages/donate-page/DonateFail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donate/success/:transactionId",
        element: <DonateSuccess></DonateSuccess>,
      },
      {
        path: "/donate/fail/:transactionId",
        element: <DonateFail></DonateFail>,
      },
    ],
  },
]);
export default router;
