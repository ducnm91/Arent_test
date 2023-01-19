import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import HomePage from "views/HomePage";
import ContactPage from "views/ContactPage";
import FormPage from "views/FormPage";
import MyRecordPage from "views/MyRecordPage";
import LoginPage from "views/Auth/Login";
import ProtectedRoute from "routers/ProtectedRoute";
import AuthRoute from "routers/AuthRoute";

function App() {
  const { isAuth } = useSelector((state: any) => state.auth);
  const [user, setUser] = React.useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="my-record" element={<MyRecordPage />} />
            
            {/* <Route path="contact" element={<ContactPage />} />
            <Route path="form" element={<FormPage />} /> */}
          </Route>
          <Route element={<AuthRoute isAllowed={!isAuth} />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
