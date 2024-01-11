import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import BeATrainer from "../pages/BeATrainer/BeATrainer";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/gallery",
            element: <Gallery></Gallery>,
          },
          {
            path: "/trainer",
            element: <Trainer></Trainer>,
          },
          {
            path: "/beAtrainer",
            element: <BeATrainer></BeATrainer>,
          },
          {
            path: "/classes",
            element: <Classes></Classes>,
          },
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/register",
            element: <Registration></Registration>,
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
        ],
      },
]);



