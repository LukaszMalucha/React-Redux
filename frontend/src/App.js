import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./views/Root";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import DetailsPage from "./views/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: () => {
          return ["zxc", "asd"]
        }
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />
      },
    ]
  }


])

export default function App() {

  return <RouterProvider router={router} />

}
