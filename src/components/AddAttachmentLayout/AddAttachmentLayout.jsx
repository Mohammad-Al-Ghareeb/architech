import { useDispatch, useSelector } from "react-redux";
import "./AddAttachmentLayout.css";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { coursesAction } from "../../redux/slices/coursesSlice";
import { addVideo } from "../../redux/apiCalls/coursesApiCall";

const AddAttachmentLayout = ({ id }) => {
  const dispatch = useDispatch();
  const [VideoName, setVideoName] = useState("");
  const [Description, setDescription] = useState("");
  const [video, setVideo] = useState(null);

  const { loading } = useSelector((state) => state.course);

  const handleAddCourse = () => {
    const formData = new FormData();
    formData.append("VideoName", VideoName);
    formData.append("Description", Description);
    formData.append("Video", video);
    formData.append("CourseId", id);
    // todo: send video
    dispatch(addVideo(formData, id));
    setVideoName("");
    setDescription("");
    setVideo(null);
  };

  return (
    <div className="dash-users-layout video-layout">
      <div className="check video-lay">
        <div className="add-new">
          <p>إضافة كورس جديد ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(coursesAction.setIsOpenedAttachment());
            }}
          />
        </div>
        <img src="/assests/addCourseImg.png" />
        <form className="form form-dash">
          <label>أدخل اسم الفيديو</label>
          <input
            value={VideoName}
            onChange={(e) => {
              setVideoName(e.target.value);
            }}
            type="text"
            placeholder="الفيديو الأول"
          />

          <label>أدخل وصف الفيديو</label>
          <input
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="الفيديو الأول"
          />

          <div className="input-photo">
            <input
              className="hide-input"
              type="file"
              onChange={(e) => {
                setVideo(e.target.files[0]);
              }}
            />
            <div className="div-helper">أضف فيديو</div>
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

export default AddAttachmentLayout;
