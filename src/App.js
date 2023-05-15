import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthMain from "./containers/Auth/AuthMain";
import LoginContainer from "./containers/Auth/LoginContainer";
import RegisterContainer from "./containers/Auth/RegisterContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthMain />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
    </Routes>
  );
}

export default App;
