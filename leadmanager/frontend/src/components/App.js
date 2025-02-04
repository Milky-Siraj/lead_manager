import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
// import Header from "./layout/Header";

const App = () => {
  return <div>helloo</div>;
};

// Fix: Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
