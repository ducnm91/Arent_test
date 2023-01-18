import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "store/auth/authSlice";
import axios from "../../ultil/axios";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    if (!name.trim().length) {
      return;
    }
    axios
      .post("/test_api", { name })
      .then((res) => {
        dispatch(login());
        localStorage.setItem("ACCESS_TOKEN", "xxx");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div id="login-page">
        <div className="row">
          <div className="col-lg-4">
            <form>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter any thing to login"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                disabled={!name.trim().length}
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
