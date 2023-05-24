import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthMain from "./containers/Auth/AuthMain";
import LoginContainer from "./containers/Auth/LoginContainer";
import RegisterContainer from "./containers/Auth/RegisterContainer";
import MainContainer from "./containers/Common/MainContainer";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<AuthMain />} />
      <Route path="/auth/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/" element={<MainContainer />} />
    </Routes>
  );
}

export default App;
