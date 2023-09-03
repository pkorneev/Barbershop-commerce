import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Price from "./components/Price";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";

const aboutContent = [
  "Individual approach",
  "Low prices",
  "High-quality tools and cosmetics",
  "Free parking",
  "Hookah and plasma with console",
  "Different drinks in our bar",
];
function App() {
  return (
    <>
      <Header />
      <About content={aboutContent} />
      <Price />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
