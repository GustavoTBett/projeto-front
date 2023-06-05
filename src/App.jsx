import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Calender from "./Routes/Calender.jsx";
import Login from "./Routes/Login";
import Cadastrar from "./Routes/Cadastrar";
import RedefinirSenha from "./Routes/RedefinirSenha";
import Tarefas from "./Routes/Tarefas";
import Perfil from "./Routes/Perfil";
import Notas from "./Routes/Notas";
import BlocoDeNotas from "./Routes/BlocoDeNotas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />,
  },
  {
    path: "/redefinir-senha",
    element: <RedefinirSenha />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        path: "perfil",
        element: <Perfil />,
      },
      {
        path: "calendario",
        element: <Calender />,
      },
      {
        path: "tarefas-pendentes/:date",
        element: <Tarefas />,
      },
      {
        path: "notas",
        element: <Notas />,
      },
      {
        path: "bloco-de-notas",
        element: <BlocoDeNotas />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
