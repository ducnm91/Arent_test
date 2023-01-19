import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "views/HomePage";
import HealthPage from "views/HealthPage";
import MyRecordPage from "views/MyRecordPage";
import LoginPage from "views/Auth/Login";
import ProtectedRoute from "routers/ProtectedRoute";
import AuthRoute from "routers/AuthRoute";
import CustomRoute from "routers/CustomRoute";

function App() {
  const { isAuth } = useSelector((state: any) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="my-record" element={<MyRecordPage />} />
          </Route>
          <Route element={<AuthRoute isAllowed={!isAuth} />}>
            <Route path="login" element={<LoginPage />} />
          </Route>          
          <Route element={<CustomRoute />}>
            <Route path="health" element={<HealthPage />} />
            <Route path="*" element={<p className="text-center mt-4">There's nothing here: 404!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
