import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScroolTop from "../utils/ScroolTop";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <ScroolTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
