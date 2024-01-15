import { useDispatch, useSelector } from "react-redux";
import "./SendNotifications.css";
import { dashUserActions } from "../../redux/slices/dashUserSlice";
import { useState } from "react";
import { addDashUser } from "../../redux/apiCalls/dashUserApiCall";
import { RotatingLines } from "react-loader-spinner";
import { notificationsAction } from "../../redux/slices/notificationsSlice";
import { addNotification } from "../../redux/apiCalls/notificationsApiCall";

const SendNotifications = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userName, setUserName] = useState("AllUsersBelong");
  const { loading } = useSelector((state) => state.notification);
  const { user } = useSelector((state) => state.auth);
  const handleAddAdmin = () => {
    const user2 = {
      title: title,
      body: body,
      userName: userName,
    };
    dispatch(addNotification(user2, currentPage, setCurrentPage, user.token));

    setTitle("");
    setBody("");
    setUserName("AllUsersBelong");
  };

  return (
    <div className="dash-users-layout">
      <div className="check notification-lay">
        <div className="add-new">
          <p>إضافة اشعار</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(notificationsAction.setIsOpenedNotifications());
            }}
          />
        </div>
        <img src="/assests/notificationImage.png" />
        <form className="form form-dash">
          <label>أدخل عنوان الاشعار</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="عنوان الاشعار"
          />
          <label>أدخل نص الاشعار</label>
          <input
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            type="text"
            placeholder="نص الاشعار"
          />
          <label>لمن تريد ارسال الاشعار</label>
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="اسم المستخدم"
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

export default SendNotifications;
