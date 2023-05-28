import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Calender from "./Routes/Calender";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/Calender",
        element: <Calender />
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
