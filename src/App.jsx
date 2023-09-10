import { useState } from "react";
import MainPage from "./components/mainPage/MainPage";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservation from "./components/reservation/Reservation";
import "./App.css";

export const MyContext = createContext("");

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
    <Router>
      <MyContext.Provider value={{ lastClickedHair, hairClickedHandler }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
