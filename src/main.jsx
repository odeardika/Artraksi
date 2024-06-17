import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/loginregis/Login.jsx";
import Regis from "./routes/loginregis/Regis.jsx";
import UserProfile from "./routes/UserProfile/UserProfile.jsx";
import ComunityPage from "./routes/ComunityPage/ComunityPage.jsx";
import BlogPage from "./routes/BlogPage.jsx";
import ArticlePage from "./routes/ArticlePage/ArticlePage.jsx";
import Calender from "./routes/Calender.jsx";
import TentangKamiPage from "./routes/tentangkami/TentangKamiPage.jsx";
import DetailComunity from "./routes/DetailComunity/DetailComunity.jsx";
import DetailArticle from "./routes/DetailArticle/DetailArticle.jsx";



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
    path: "/user",
    element: <UserProfile />,
  },
  {
    path: "/komunitas",
    element: <ComunityPage />,
  },
  {
    path: "/komunitas/:id",
    element: <DetailComunity />,
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
    path: "/artikel/:id",
    element: <DetailArticle />,
  },
  {
    path: "/kalender",
    element: <Calender />,
  },
  {
    path: "/tentang_kami",
    element: <TentangKamiPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
