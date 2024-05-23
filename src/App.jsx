import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/signup", element: <Signup /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
