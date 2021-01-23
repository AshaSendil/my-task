import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Body from "./components/Body";


function Home() {
  return (
    <div
      id="homePage"
      className="col-span-4 bg-white max-h-screen overflow-x-auto pr-10 pl-1"
    >
      <Header />
      <Filter />
      <Body />
    </div>
  );
}

export default Home;
