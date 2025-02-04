import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import App from "./components/App";

// Create a root and render the application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
