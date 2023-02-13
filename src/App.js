import React from "react";
import "./App.css";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Industries } from "./components/Industries";
import { Partners } from "./components/Partners";
import { Technologies } from "./components/Technologies";
const App = () => {
  return (
    <div>
      <Home />
      <Partners />
      <Explore />
      <Industries/>
      <Technologies/>
      <Footer/>
    </div>
  );
};

export default App;
