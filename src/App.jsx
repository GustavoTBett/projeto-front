import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Calender from "./Routes/Calender.jsx";
import Login from "./Routes/Login";
import Cadastrar from "./Routes/Cadastrar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/calendario",
        element: <Calender />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
