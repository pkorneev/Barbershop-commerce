import Header from "./Header";
import About from "./About";
import Price from "./Price";
import Contacts from "./Contacts";
import Footer from "../Footer";

const MainPage = () => {
  const aboutContent = [
    "Individual approach",
    "Low prices",
    "High-quality tools and cosmetics",
    "Free parking",
    "Hookah and plasma with console",
    "Different drinks in our bar",
  ];
  return (
    <>
      <Header />
      <About content={aboutContent} />
      <Price />
      <Contacts />
      <Footer />
    </>
  );
};
export default MainPage;
