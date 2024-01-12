import { useDispatch, useSelector } from "react-redux";
import "./CourseLayout.css";
import { dashUserActions } from "../../redux/slices/dashUserSlice";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { coursesAction } from "../../redux/slices/coursesSlice";
import { addCourse } from "../../redux/apiCalls/coursesApiCall";

const CourseLayout = ({ currentPage, coursePerPage }) => {
  const dispatch = useDispatch();
  const [CourseName, setCourseName] = useState("");
  const [Description, setDescription] = useState("from admin");
  const [Image, setImage] = useState(null);

  const { loading } = useSelector((state) => state.course);

  const handleAddCourse = () => {
    const formData = new FormData();
    formData.append("CourseName", CourseName);
    formData.append("Description", Description);
    formData.append("Image", Image);
    // todo: send course
    dispatch(addCourse(formData, currentPage, coursePerPage));
    setCourseName("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="dash-users-layout ">
      <div className="check course-lay">
        <div className="add-new">
          <p>إضافة كورس جديد ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(coursesAction.setIsOpenedCourse());
            }}
          />
        </div>
        <img src="/assests/addCourseImg.png" />
        <form className="form form-dash">
          <label>أدخل اسم الكورس</label>
          <input
            value={CourseName}
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
            type="text"
            placeholder="كورس بناء"
          />

          <div className="input-photo">
            <input
              className="hide-input"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="div-helper">أضف صورة</div>
          </div>

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

export default CourseLayout;
