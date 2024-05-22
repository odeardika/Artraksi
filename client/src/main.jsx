import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Regis from "./routes/Regis.jsx";
import ComunityPage from "./routes/ComunityPage.jsx";
import BlogPage from "./routes/BlogPage.jsx";
import ArticlePage from "./routes/ArticlePage.jsx";
import Calender from "./routes/Calender.jsx";


import './dist/css/main.css'
import FooterComponent from "./components/FooterComponent.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regis",
    element: <Regis />,
  },
  {
    path: "/komunitas",
    element: <ComunityPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/artikel",
    element: <ArticlePage />,
  },
  {
    path: "/kalender",
    element: <Calender />,
  },
  {
    path: "/components",
    element: <FooterComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
