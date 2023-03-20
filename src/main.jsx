import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/Root.jsx";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllComponents from "./routes/AllComponents.jsx";
import SignInForm from "./forms/SignInForm.jsx";
import Buttons from "./routes/Buttons.jsx";
import ComboBox from "./components/ComboBox/index.jsx";
import Forms from "./routes/Forms.jsx";
import DataDisplay from "./routes/DataDisplay.jsx";
import Components from "./routes/Components.jsx";
import SingleCourse from './routes/alen routes/SingleCourse';
import BasicInfoPage from './routes/alen routes/BasicInfo';
import Content from './routes/alen routes/Content';
import PoolManagement from './routes/alen routes/PoolManagement';
import CoursesPage from './routes/alen routes/CoursesPage';
import MessagePage from './routes/alen routes/Message';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
  {
    path: "single-course/:id",
    element: <SingleCourse/>,
    children: [
      {
        path: "basic-info/",
        element: <BasicInfoPage/>,
      },
      {
        path: "content",
        element: <Content/>,
      },
      {
        path: "pool-management",
        element: <PoolManagement/>,
      },
      {
        path: "data-display",
        element: <DataDisplay/>,
      },
    ]
  },
  {
    path: "sign-in",
    element: <SignInForm/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
  {
    path: "courses",
    element: <CoursesPage/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
  {
    path: "message-page",
    element: <MessagePage/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
