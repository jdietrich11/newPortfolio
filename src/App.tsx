import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./Components/header/header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import References from "./Pages/References/References";
import Resume from "./Pages/Resume/Resume";

import "./App.styles.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/references" element={<References />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
