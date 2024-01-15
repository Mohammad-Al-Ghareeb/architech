import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slices/authSlice";
import { coursesAction } from "../../redux/slices/coursesSlice";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="user-container">
        <h3 className="prog-name">
          <span>ARCHI</span>
          <span>TECH</span>
        </h3>
        <div className="image">
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="53"
              height="53"
              rx="26.5"
              fill="#41C0F0"
              stroke="#41C0F0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4843 30.8589C23.602 30.8589 20.2866 31.4459 20.2866 33.7966C20.2866 36.1474 23.581 36.7554 27.4843 36.7554C31.3665 36.7554 34.6809 36.1675 34.6809 33.8177C34.6809 31.4679 31.3876 30.8589 27.4843 30.8589Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4842 27.506C30.0319 27.506 32.0969 25.4401 32.0969 22.8924C32.0969 20.3447 30.0319 18.2798 27.4842 18.2798C24.9365 18.2798 22.8706 20.3447 22.8706 22.8924C22.862 25.4315 24.9136 27.4974 27.4517 27.506H27.4842Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="user-name">{user.username}</p>
        <p className="role">Admin</p>
      </div>
      <div className="links">
        <NavLink
          to={"/"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <img src="/assests/courses.png" alt="" />
            <p className="link-name">الكورسات</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/subscribers"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <img src="/assests/subscribe.png" alt="" />
            <p className="link-name">الاشتراكات</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/centers"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <img src="/assests/center.png" alt="" />
            <p className="link-name">مراكز الخدمة</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/app-users"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/appUser.png" alt="" />
            </div>
            <p className="link-name">مستخدمي التطبيق</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/dash-users"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/dashUser.png" alt="" />
            </div>
            <p className="link-name">مستخدمي اللوحة</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/notifications"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/notifi.png" alt="" />
            </div>
            <p className="link-name">الاشعارات</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/chats"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/chat.png" alt="" />
            </div>
            <p className="link-name">المحادثات</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/settings"}
          className="link"
          onClick={() => {
            dispatch(coursesAction.removeVideoData());
          }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/setting.png" alt="" />
            </div>
            <p className="link-name">الاعدادات</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </NavLink>
        <div
          onClick={() => {
            dispatch(authActions.setLogout());
          }}
          className="link"
          style={{ cursor: "pointer" }}
        >
          <div className="icon">
            <div className="circle">
              <img src="/assests/logout.png" alt="" />
            </div>
            <p className="link-name">تسجيل الخروج</p>
          </div>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.13811 7.83263C4.87776 8.05579 4.45565 8.05579 4.1953 7.83263L0.195304 4.40406C-0.0650457 4.1809 -0.0650457 3.8191 0.195304 3.59594L4.1953 0.167368C4.45565 -0.0557899 4.87776 -0.0557899 5.13811 0.167367C5.39846 0.390524 5.39846 0.752333 5.13811 0.975489L1.60952 4L5.13811 7.02451C5.39846 7.24767 5.39846 7.60948 5.13811 7.83263Z"
              fill="#222831"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
