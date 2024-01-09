import { useDispatch } from "react-redux";
import "./LogoutLayout.css";
import { authActions } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

const LogoutLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="logout-layout">
      <div className="check log-lay">
        <img src="/assests/logoutImg.png" />
        <p>
          هل تريد حقاً تسجيل الخروج من التطبيق والتوقف عن مشاهدة الفيديوهات؟
        </p>
        <button
          className="no"
          onClick={() => {
            dispatch(authActions.setLogout());
          }}
        >
          لا.. لا أريد
        </button>
        <button
          onClick={() => {
            dispatch(authActions.setLogout());
            localStorage.removeItem("userInfo");
            dispatch(authActions.logout());
            navigate("/login");
          }}
          className="yes"
        >
          نعم. متابعة تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default LogoutLayout;
