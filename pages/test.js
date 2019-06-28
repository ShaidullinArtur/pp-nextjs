import React from "react";
import cowsay from "cowsay-browser";
import Header from "../components/organisms/Header";

function CowsayHi() {
  return (
    <div>
      <Header />
      <pre>{cowsay.say({ text: "hi there!" })}</pre>;
    </div>
  );
}

export default CowsayHi;
