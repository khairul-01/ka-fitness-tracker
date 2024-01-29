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
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllTrainer from "../pages/Dashboard/AdminHome/AllTrainer/AllTrainer";
import AppliedTrainer from "../pages/Dashboard/AdminHome/AppliedTrainer/AppliedTrainer";
import Balance from "../pages/Dashboard/AdminHome/Balance/Balance";
import ManageSlots from "../pages/Dashboard/TrainerHome/ManageSlots/ManageSlots";
import ManageMembers from "../pages/Dashboard/TrainerHome/ManageMembers/ManageMembers";
import AddNewForum from "../pages/Dashboard/TrainerHome/AddNewForum/AddNewForum";
import AddNewClass from "../pages/Dashboard/TrainerHome/AddNewClass/AddNewClass";
import ActivityLog from "../pages/Dashboard/MemberHome/ActivityLog/ActivityLog";
import ProfileSettings from "../pages/Dashboard/MemberHome/ProfileSetting/ProfileSettings";
import RecommendedClasses from "../pages/Dashboard/MemberHome/RecommendedClasses/RecommendedClasses";
import Forum from "../pages/Forum/Forum";
import TrainerBooked from "../pages/TrainerBooked/TrainerBooked";
import Payment from "../pages/Payment/Payment";
import ExploreBlog from "../pages/Home/Blog/ExploreBlog";
import AllSubscriber from "../pages/Dashboard/AdminHome/AllSubscriber/AllSubscriber";
import PrivateRoute from "./PrivateRoute";



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
        path: "/exploreBlogs/:id",
        element: <ExploreBlog></ExploreBlog>,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>,
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/trainers/${params.id}`)
      },
      {
        path: "/beAtrainer",
        element: <PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>,
      },
      {
        path: "/trainerBooked",
        element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>,
      },
      {
        path: '/payment',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
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
        path: "/community",
        element: <Forum></Forum>,
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
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Admin routes
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'allSubscribers',
        element: <AllSubscriber></AllSubscriber>
      },
      {
        path: 'allTrainers',
        element: <AllTrainer></AllTrainer>
      },
      {
        path: 'appliedTrainer',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: 'appliedTrainer',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: 'balance',
        element: <Balance></Balance>
      },
      // Trainer routes
      {
        path: 'manageSlots',
        element: <ManageSlots></ManageSlots>
      },
      {
        path: 'manageMembers',
        element: <ManageMembers></ManageMembers>
      },
      {
        path: 'addNewForum',
        element: <AddNewForum></AddNewForum>
      },
      {
        path: 'addNewClass',
        element: <AddNewClass></AddNewClass>
      },
      // Member routes
      {
        path: 'activityLog',
        element: <ActivityLog></ActivityLog>
      },
      {
        path: 'profileSettings',
        element: <ProfileSettings></ProfileSettings>
      },
      {
        path: 'recommendedClasses',
        element: <RecommendedClasses></RecommendedClasses>
      },
    ]
  }
]);



