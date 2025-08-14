import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
