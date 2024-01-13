import { useDispatch, useSelector } from "react-redux";
import "./AddAttachmentLayout.css";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { coursesAction } from "../../redux/slices/coursesSlice";
import { addAttachment, addVideo } from "../../redux/apiCalls/coursesApiCall";

const AddAttachmentLayout = ({ id }) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("from admin");
  const [Attachment, setAttachment] = useState(null);

  const { loading } = useSelector((state) => state.course);

  const handleAddAttachment = () => {
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Description", Description);
    formData.append("Attachment", Attachment);
    formData.append("VideoId", id);
    // todo: send video
    dispatch(addAttachment(formData, Name));
    setName("");
    setDescription("");
    setAttachment(null);
  };

  return (
    <div className="dash-users-layout video-layout">
      <div className="check attachment-lay">
        <div className="add-new">
          <p>إضافة ملحق جديد ؟</p>
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
          <label>أدخل اسم الملحق</label>
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="اسم الملحق"
          />

          <div className="input-photo">
            <input
              className="hide-input"
              type="file"
              onChange={(e) => {
                setAttachment(e.target.files[0]);
              }}
            />
            <div className="div-helper">أضف ملحق</div>
          </div>

          <div className="btn" onClick={handleAddAttachment}>
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
