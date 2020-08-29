import React from "react";

import "./app.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/*Side Bar*/}
      <Sidebar />

      {/*Feed*/}
      <Feed />

      {/*Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
