import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "sweetalert2/dist/sweetalert2.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
