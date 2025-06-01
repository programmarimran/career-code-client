import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import CardDetails from "../components/CardDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../components/JobApply";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../components/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all",
        element: <p>all pages</p>,
      },

      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: CardDetails,
      },
      {
        path: "/job-apply/:jobId",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path:"my-applications",
        element:<PrivateRouter><MyApplications></MyApplications></PrivateRouter>
      }
      ,
      {
        path:"addJob",
        element:<PrivateRouter><AddJob></AddJob></PrivateRouter>
      }
      ,
      {
        path:"myJob",
        element:<PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
      },
      {
        path:"/applications/job/:job_id",
        element:<PrivateRouter><ViewApplications></ViewApplications></PrivateRouter>,
        loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      }
      ,
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
