import Cost from "./Pages/CalculateTheCost/Cost";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { ServicesPages } from "./Pages/Services/ServicesPages";
import { Bot } from "./components/Bot/Bot";
import { Footer } from "./components/Footer/Footer";
import AuthNav from "./components/Navbar/AuthNav";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Static from "./QueryPage/Static";
import Ecommerce from "./QueryPage/Ecommerce";
import CMS from "./QueryPage/CMS";
import CustomApp from "./QueryPage/CustomApp";
import { About } from "./Pages/About/About";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import ReactLoading from "react-loading";
import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";
// import { FullVideoScreen } from "./components/FullVideoScreen/FullVideoScreen";

const Homelayout = () => {
  const [PreLoading, SetPreLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      SetPreLoading(false);
    }, 1000);
  }, [PreLoading]);

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:flex  2xl:flex-col items-center justify-center w-full">
        <div className="w-full">
          <AuthNav />
        </div>
        <div className="w-full 2xl:container flex items-center justify-center">
          <div
            className={`w-full 2xl:container flex items-center justify-center ${
              PreLoading ? "blur" : "blur-none"
            } `}
          >
            <Outlet />
          </div>
          <div
            className={`${
              PreLoading ? "absolute" : "hidden"
            }  w-full top-0 left-0 right-0 h-[100vh] flex flex-col justify-center   items-center`}
          >
            <GridLoader
              className={`!text-[white] w-[40px] h-[30px] ${
                PreLoading ? "flex items-center justify-center" : "hidden"
              }`}
              color="var(--primary-color)"
            ></GridLoader>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <ServicesPages />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/team",
          element: <Contact />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/services/cost",
          element: <Cost />,
        },
        {
          path: "/services/cost/static",
          element: <Static />,
        },
        {
          path: "/services/cost/ecommerce",
          element: <Ecommerce />,
        },
        {
          path: "/services/cost/cms",
          element: <CMS />,
        },
        {
          path: "/services/cost/customwebpage",
          element: <CustomApp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
