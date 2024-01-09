import { RotatingLines } from "react-loader-spinner";
import { addAppUser } from "../../redux/apiCalls/appUsersApiCall";
import { appUserAction } from "../../redux/slices/appUsersSlice";
import "./AppUsersLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AppUsersLayout = ({ currentPage, appUserPerPage }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { loading } = useSelector((state) => state.appUser);

  const handleAddAdmin = () => {
    const user = {
      username,
      email,
      password,
      phoneNumber,
    };
    dispatch(addAppUser(user, currentPage, appUserPerPage));
    setUsername("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };
  return (
    <div className="dash-users-layout">
      <div className="check">
        <div className="add-new">
          <p>إضافة مستخدم جديد ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(appUserAction.setIsOpenedApp());
            }}
          />
        </div>
        <img src="/assests/dashUsersLayout.png" />
        <form className="form form-dash">
          <label>أدخل اسم المستخدم</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="ahmad sleby"
          />
          <label>أدخل البريد الالكتروني</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="gmail.com@*****"
          />
          <label>كلمة المرور</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="********"
          />
          <label>رقم الهاتف</label>
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="text"
            placeholder="099999"
          />
          <div className="btn" onClick={handleAddAdmin}>
            {loading ? (
              <RotatingLines
                strokeColor="#fff"
                visible={true}
                height="30"
                width="30"
                color="#fff"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "اضافة"
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppUsersLayout;
