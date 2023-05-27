import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Calender from "./routes/Calender";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/calendario",
        element: <Calender />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
