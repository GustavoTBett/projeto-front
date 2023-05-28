import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Calender from "./routes/Calender";
import Login from "./routes/Login";
import Cadastrar from "./routes/Cadastrar";

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/calendario",
        element: <Calender />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastrar",
        element: <Cadastrar />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
