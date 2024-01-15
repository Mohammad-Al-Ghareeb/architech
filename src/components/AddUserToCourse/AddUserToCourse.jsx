import { useDispatch, useSelector } from "react-redux";
import "./AddUserToCourse.css";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { subscribersAction } from "../../redux/slices/subscribersSlice";
import {
  addCode,
  addUserToCourse,
  getCode,
} from "../../redux/apiCalls/subscribersApiCall";
import { getAllCourses } from "../../redux/apiCalls/coursesApiCall";

const AddUserToCourse = ({ currentPage, setCurrent }) => {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const [userName, SetUserName] = useState("");
  const [code, setCode] = useState("");

  const { allCourse } = useSelector((state) => state.course);
  const { loading, codes } = useSelector((state) => state.subscriber);

  const handleAddCourse = () => {
    const subs = {
      courseName,
      userName,
      code,
    };
    // dispatch(addCode(subs));
    dispatch(addUserToCourse(subs, currentPage, setCurrent));
    setCode("");
    SetUserName("");
    setCourseName("");
    dispatch(getAllCourses());
    dispatch(getCode());
  };

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getCode());
  }, [dispatch]);

  return (
    <div className="dash-users-layout ">
      <div className="check user-to-course-lay ">
        <div className="add-new">
          <p>إضافة مشترك ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(subscribersAction.setIsOpenedUserToCourse());
            }}
          />
        </div>
        <img src="/assests/codeImg.png" />
        <form className="form form-dash">
          <select
            className="select1"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          >
            <option value="">اختر كورس</option>
            {allCourse.map((course, index) => (
              <option className="select" key={index} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
          <select
            className="select"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          >
            <option value="">############</option>
            {codes.map((code, index) => (
              <option className="select" key={index} value={codes.id}>
                {code.code}
              </option>
            ))}
          </select>

          <label>أدخل اسم المستخدم</label>
          <input
            value={userName}
            onChange={(e) => {
              SetUserName(e.target.value);
            }}
            type="text"
            placeholder="أضف اسم المستخدم"
          />

          <div className="btn" onClick={handleAddCourse}>
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

export default AddUserToCourse;
