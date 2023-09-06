import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Price from "./components/Price";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { createContext } from "react";
import "./App.css";

export const MyContext = createContext("");

const aboutContent = [
  "Individual approach",
  "Low prices",
  "High-quality tools and cosmetics",
  "Free parking",
  "Hookah and plasma with console",
  "Different drinks in our bar",
];
function App() {
  const [lastClickedHair, setLastClickedHair] = useState("");
  const hairClickedHandler = (name) => {
    if (lastClickedHair === name) {
      setLastClickedHair("");
    } else {
      setLastClickedHair(name);
    }
  };
  return (
    <MyContext.Provider value={{ lastClickedHair, hairClickedHandler }}>
      <Header />
      <About content={aboutContent} />
      <Price />
      <Contacts />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
