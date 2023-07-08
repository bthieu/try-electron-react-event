// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import ProgressBar from './components/ProgressBar.jsx';

// console.log(ProgressBar)

// function render() {
//   ReactDOM.render(
//     <h2>
//         Hello from React!
//         <ProgressBar/>
//     </h2>,
//     document.body);
// }   

// render();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ProgressBar from "./components/ProgressBar.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <h2>Test</h2>
    <ProgressBar />
  </React.StrictMode>
);

// reportWebVitals();