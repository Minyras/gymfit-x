import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Shop from "./pages/Shop/Shop";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Trainers from "./components/Trainers/Trainers";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    setIsScrollActive(true);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home isActive={isScrollActive} />} />
            <Route
              path={"/about"}
              element={<About isActive={isScrollActive} />}
            />
            <Route
              path={"/class"}
              element={<Classes isActive={isScrollActive} />}
            />
            <Route
              path={"/shop"}
              element={<Shop isActive={isScrollActive} />}
            />
            <Route
              path={"/trainers"}
              element={<Trainers isActive={isScrollActive} />}
            />
            <Route path={"/subscribe"} element={<Subscribe />} />
            <Route path={"/class/:slug"} element={<ClassDetails />} />
            <Route path={"/product/:slug"} element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
