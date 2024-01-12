import { useDispatch, useSelector } from "react-redux";
import "./CourseVideos.css";
import { useEffect } from "react";
import {
  getCourseVideos,
  getVideoByCourseId,
} from "../../redux/apiCalls/coursesApiCall";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ChooseVideoSrc from "../../components/ChooseVideoSrc/ChooseVideoSrc";

const CourseVideos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCourseVideos(id));
  }, [id, dispatch]);
  const { courseVideos, numberOfCourses, videoSrc } = useSelector(
    (state) => state.course
  );
  return (
    <div className="course-videos">
      <Header
        src={"/assests/allCourses.png"}
        headerName={"الكورسات"}
        yes={true}
        nameNumber={"جميع الكورسات"}
        number={numberOfCourses}
        functionClick={() => {}}
        buttonName={"اضافة كورس جديد"}
      />
      <div className="course-video-container">
        {/* <div className="video-src">
          <video src="https://drive.google.com/uc?id=1FI9lkSkqnwyQmrXHfaIa61P7i56fRx_A&export=download"></video>
        </div> */}
        <div className="video-data">
          {videoSrc ? <img src="/assests/videoImg.png" alt="" /> : <p>hi</p>}

          <div className="video-data-title">
            <p className="title-text">هذا المكان مخصص لكتابة عنوان الفيديو</p>
            <div className="video-data-title-date">22/4/2024</div>
          </div>
          <div className="video-data-description">
            هذا المكان مخصص لكتابة نص يمكن أن يستبدل في نفس المساحة هذا المكان
            مخصص لكتابة نص هذا المكان مخصص لكتابة نص يمكن أن يستبدل في نفس
            المساحة.
          </div>
        </div>
        <div className="video-list">
          <div className="video-list-helper">
            {courseVideos?.map((e, index) => {
              return <ChooseVideoSrc key={index} e={e} />;
              // return <p key={index}>{e.videoId}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideos;
