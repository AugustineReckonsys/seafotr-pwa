import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QrTrackingInput from "./pages/TrackingInput";
import QrTrackingView from "./pages/TrackingView";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrTrackingInput />} />
        <Route path="/trace" element={<QrTrackingInput />} />

        <Route path="/trace/:lot_id" element={<QrTrackingView />} />
      </Routes>
    </Router>
  );
  return;
};

export default App;
