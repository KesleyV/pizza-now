import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChatRoute from "./routes/Chat";
import HomeRoute from "./routes/Home";
import ProfileRoute from "./routes/Profile";
import SettingsRoute from "./routes/Settings";
import WalletRoute from "./routes/Wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/profile",
    element: <ProfileRoute />,
  },
  {
    path: "/wallet",
    element: <WalletRoute />,
  },
  {
    path: "/settings",
    element: <SettingsRoute />,
  },
  {
    path: "/chat",
    element: <ChatRoute />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
