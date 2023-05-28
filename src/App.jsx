import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Calender from "./Routes/Calender";

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastrar",
    element: <SignUp />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/calendario",
        element: <Calender />
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
