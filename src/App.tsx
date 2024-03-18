import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./Components/header/header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import References from "./Pages/References/References";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Components/footer/footer";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/references" element={<References />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
