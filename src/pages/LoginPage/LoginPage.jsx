import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/apiCalls/authApiCall";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { authActions } from "../../redux/slices/authSlice";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userName.trim() === "") return toast.error("email is required");
    if (password.trim() === "") return toast.error("password is required");

    dispatch(loginUser({ userName, password, deviceId: "00F" }));
  };

  return (
    <div className="login">
      <div className="right">
        <img src="/assests/bro.png" alt="" />
      </div>
      {!user ? (
        <div className="login-container">
          <img src="/assests/topleft.png" alt="" />
          <h3 className="prog-name">
            <span>ARCHI</span>
            <span>TECH</span>
          </h3>
          <div className="text">
            <p>تسجيل الدخول للوحة التحكم</p>
            <p>أهلا بك في لوحة التحكم الخاصة بك</p>
          </div>

          <form className="form">
            <label>اسم صاحب اللوحة</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="اسم الشخص"
              required
            />
            <label>كلمة المرور</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="********"
              required
            />
            {!success ? (
              <button onClick={formSubmitHandler} type="submit">
                إضافة
              </button>
            ) : (
              <button className="spinner">
                <RotatingLines
                  visible={true}
                  height="40"
                  width="40"
                  color="#fff"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </button>
            )}
          </form>
        </div>
      ) : (
        <div className="welcome">
          <p>Welcome</p>
          <Link
            to={"/"}
            onClick={() => {
              dispatch(authActions.setShowSideBar());
            }}
          >
            انقر للذهاب الى الرئيسية
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
