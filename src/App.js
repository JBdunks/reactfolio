import React from "react";
import ButtonAppBar from "./components/nav/nav";
import FullWidthGrid from "./components/main/main";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <>
      <ButtonAppBar />
      <FullWidthGrid />
      <Project />
      <Footer />
    </>
  );
}

export default App;
