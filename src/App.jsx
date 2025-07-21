import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ErrorRoutes from "./components/ErrorRoutes";
import ExploreMore from "./components/ExploreMore";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",          //Same as "/"
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path:"/exploremore/:resId",
        element:<ExploreMore/>
      }
    ]
  },
  {
    path:"*",
    element:<ErrorRoutes/>,
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={AppRoutes} />
    </div>
  )
}
export default App;