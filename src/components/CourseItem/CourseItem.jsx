import "./CourseItem.css";

const CourseItem = ({ src, courseName, createdAt, numberOfVideos }) => {
  return (
    <div className="course-item">
      <img src={src || "/assests/courseImg.png"} alt="" />
      <div className="course-data">
        <div className="top">
          <h3 className="course-name">{courseName}</h3>
          <div className="date">
            {createdAt}
            <span>
              <img src="/assests/date-img.png" alt="" />
            </span>
          </div>
        </div>
        <div className="bottom">
          <p className="how">يحوي هذا الكورس على {numberOfVideos} فيديوهات</p>
          <img src="/assests/left-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
