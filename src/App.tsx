import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";

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
            {/* <Route to={"/about"} element={<About />} />
            <Route to={"/class"} element={<Classes />} />
            <Route to={"/shop"} element={<Shop />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
