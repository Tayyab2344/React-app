import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Experts />
      <NewsLetter />
    </div>
  );
};

export default App;
