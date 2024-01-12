import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Sidebar from "./components/Sidebar/Sidebar";
import AppUsersPage from "./pages/AppUsersPage/AppUsersPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SubscribersPage from "./pages/SubscribersPage/SubscribersPage";
import CentersPage from "./pages/CentersPage/CentersPage";
import DashUsersPage from "./pages/DashUsersPage/DashUsersPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import ChatsPage from "./pages/ChatsPage/ChatsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import LogoutLayout from "./components/LogoutLayout/LogoutLayout";
import DashUsersLayout from "./components/DashUsersLayout/DashUsersLayout";
import CourseVideos from "./pages/CourseVideos/CourseVideos";

function App() {
  const { user, isLogout } = useSelector((state) => state.auth);
  const { isOpenedDash } = useSelector((state) => state.dashUser);

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div
        className="App"
        style={
          user && window.location.pathname !== "/login"
            ? { display: "grid" }
            : { display: "flex" }
        }
      >
        <BrowserRouter>
          {isLogout && <LogoutLayout />}
          {/* {isOpenedDash && <DashUsersLayout />} */}
          {/* {window.location.pathname !== "/login" && <Sidebar />} */}
          {user && window.location.pathname !== "/login" && <Sidebar />}
          <Routes className="app-pages">
            <Route
              path="/"
              element={user ? <CoursesPage /> : <Navigate to={"/login"} />}
            />

            <Route
              path="/course/:id"
              element={user ? <CourseVideos /> : <Navigate to={"/login"} />}
            />

            <Route
              path="/subscribers"
              element={user ? <SubscribersPage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/centers"
              element={user ? <CentersPage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/app-users"
              element={user ? <AppUsersPage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/dash-users"
              element={user ? <DashUsersPage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/notifications"
              element={
                user ? <NotificationsPage /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/chats"
              element={user ? <ChatsPage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/settings"
              element={user ? <SettingsPage /> : <Navigate to={"/login"} />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
