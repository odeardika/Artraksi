import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/loginregis/Login.jsx";
import Regis from "./routes/loginregis/Regis.jsx";
import ComunityPage from "./routes/ComunityPage.jsx";
import BlogPage from "./routes/Blog/BlogPage.jsx";
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
  {
    path: "/tentang_kami",
    element: <h1>Tentang Kami</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
