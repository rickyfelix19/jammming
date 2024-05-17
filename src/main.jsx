import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/mxcZzEaRKh3MaagzTV1hM3ayfJo.jpg')`,
        backgroundPosition: "center",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
