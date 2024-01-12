import { useDispatch, useSelector } from "react-redux";
import "./CourseVideos.css";
import { useEffect } from "react";
import {
  deleteAttachment,
  getCourseVideos,
  getOneCourse,
} from "../../redux/apiCalls/coursesApiCall";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ChooseVideoSrc from "../../components/ChooseVideoSrc/ChooseVideoSrc";
import { coursesAction } from "../../redux/slices/coursesSlice";

const CourseVideos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCourseVideos(id));
    dispatch(getOneCourse(id));
    dispatch(coursesAction.removeVideoSrc());
  }, [id, dispatch]);
  const { courseVideos, videoData, videoAttachment, helperName } = useSelector(
    (state) => state.course
  );
  return (
    <div className="course-videos">
      <Header
        src={"/assests/allCourses.png"}
        headerName={helperName}
        functionClick={() => {}}
        buttonName={"اضافة فيديو"}
      />
      <div className="course-video-container">
        {/* <div className="video-src">
          <video src="https://drive.google.com/uc?id=1FI9lkSkqnwyQmrXHfaIa61P7i56fRx_A&export=download"></video>
        </div> */}
        <div className="video-data">
          {videoData?.fileId ? (
            <>
              <p>{videoData?.fileId}</p>
              <img src="/assests/videoImg.png" alt="" />
            </>
          ) : (
            <p>hi</p>
          )}

          <div className="video-data-title">
            <p className="title-text">{videoData?.courseName}</p>
            <div className="video-data-title-date">{videoData?.createdAt}</div>
          </div>
          <div className="video-data-description">{videoData?.description}</div>
          {
            // videoData?.attachmentId?.length
            videoAttachment ? (
              <div className="attachment-data">
                <div className="attachment-data-left">
                  <p>اسم الملحق:</p>
                  <p className="addAttachment">{videoAttachment}</p>
                </div>

                <div className="attachment-data-right">
                  <div
                    className="delete-btn"
                    onClick={() => {
                      // console.log(videoData?.attachmentId[0]);
                      dispatch(deleteAttachment(videoData?.attachmentId[0]));
                    }}
                  >
                    حذف هذا الملف
                  </div>
                </div>
              </div>
            ) : (
              <p className="addAttachment">
                {videoData ? (
                  <div className="delete-btn" onClick={() => {}}>
                    اضافة ملف
                  </div>
                ) : (
                  <p></p>
                )}
              </p>
            )
          }
        </div>
        <div className="video-list">
          <div className="video-list-helper">
            {courseVideos?.map((e, index) => {
              return <ChooseVideoSrc key={index} e={e} index={index + 1} />;
              // return <p key={index}>{e.videoId}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideos;
