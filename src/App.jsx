import  {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayouts from "./components/Layout/AppLayouts";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/UI/CountryDetails";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayouts/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
         path: "/about",
         element: <About/>,
        },
        {
         path: "/country",
         element: <Country/>,
        },
        {
          path: "/country/:id", // dynamic route hota h 
          element: <CountryDetails/>,
        },
        {
         path: "/contact",
         element: <Contact/>,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
