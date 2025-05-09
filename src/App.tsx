import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Shop from "./pages/Shop/Shop";

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
            <Route path={"/about"} element={<About />} />
            <Route path={"/class"} element={<Classes />} />
            <Route path={"/shop"} element={<Shop />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
