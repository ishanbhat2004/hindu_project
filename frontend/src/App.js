import React from "react";

import beach_1 from "../src/assets/beach-1.jpg";
import beach_2 from "../src/assets/beach-2.webp";

import { Navbar } from "./components";
import { Footer, Header, Mission, Features, Support, CTA } from "./container";
import "./App.css";

const slides = [
  { url: beach_1, text: "Rajendra Verma (Chairman)" },
  { url: beach_2, text: "Ratnam Sabjiwala (Vice-President)" },
];

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Mission />
      <div class="slideShow">
        <Features slides={slides} />
      </div>
      <Support />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
