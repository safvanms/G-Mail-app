import React, { useState } from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./Layout/Inbox/Inbox";
import Mail from "./Layout/Mail/Mail";

export default function App() {
  const [expandedSidebar, setExpandedSidebar] = useState(false);

  const toggleSidebar = () => {
    setExpandedSidebar((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <BrowserRouter>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="main_sec">
          <div
            className={`lg_view_options ${
              expandedSidebar ? "sidebar-open" : ""
            }`}
          >
            <Sidebar />
          </div>
          <div className="mail_sec">
            <Routes>
              <Route index path="/" element={<Inbox />} />
              <Route path="/mail/:id" element={<Mail />} />
              <Route path="*" element={<Inbox />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
