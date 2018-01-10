import React from "react";

const transitionDivStyle = {
  WebkitTransition: "all", // note the capital 'W' here
  msTransition: "all" // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={transitionDivStyle}>This should work cross-browser</div>;
}

export default ComponentWithTransition;
