import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import LoginPage from "./routes/LoginPage/LoginPage.jsx";
import RegisPage from "./routes/RegisPage/RegisPage.jsx";
import ComunityPage from "./routes/ComunityPage/ComunityPage.jsx";
import BlogPage from "./routes/BlogPage.jsx";
import ArticlePage from "./routes/ArticlePage/ArticlePage.jsx";
import TentangKamiPage from "./routes/tentangkami/TentangKamiPage.jsx";
import DetailComunity from "./routes/DetailComunity/DetailComunity.jsx";
import DetailArticle from "./routes/DetailArticle/DetailArticle.jsx";
import DetailKalenderPage from "./routes/Kalender/DetailKalenderPage.jsx";
import EventPage from "./routes/EventPage/EventPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/regis",
    element: <RegisPage/>,
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
    path: "/acara",
    element: <EventPage />,
  },
  {
    path: "/tentang_kami",
    element: <TentangKamiPage />
  },
  {
    path: "/DetailKalender",
    element: <DetailKalenderPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
