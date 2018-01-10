import React from "react";

const imgUrl = "./../../public/favicon.ico";

const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")"
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

export default HelloWorldComponent;
