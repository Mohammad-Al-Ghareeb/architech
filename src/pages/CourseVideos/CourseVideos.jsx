import { useDispatch, useSelector } from "react-redux";
import "./CourseVideos.css";
import { useEffect } from "react";
import {
  deleteAttachment,
  deleteVideo,
  getCourseVideos,
  getOneCourse,
} from "../../redux/apiCalls/coursesApiCall";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ChooseVideoSrc from "../../components/ChooseVideoSrc/ChooseVideoSrc";
import { coursesAction } from "../../redux/slices/coursesSlice";
import AddVideoLayout from "../../components/AddVideoLayout/AddVideoLayout";
import { RotatingLines } from "react-loader-spinner";
import AddAttachmentLayout from "../../components/AddAttachmentLayout/AddAttachmentLayout";

const CourseVideos = () => {
  const dispatch = useDispatch();
  const { isOpenedVideo } = useSelector((state) => state.course);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCourseVideos(id));
    dispatch(getOneCourse(id));
    dispatch(coursesAction.removeVideoSrc());
  }, [id, dispatch]);
  const {
    courseVideos,
    videoData,
    videoAttachment,
    helperName,
    deleteLoading,
    isOpenedAttachment,
  } = useSelector((state) => state.course);
  return (
    <div className="course-videos">
      {isOpenedVideo && <AddVideoLayout id={id} />}

      {isOpenedAttachment && <AddAttachmentLayout id={videoData?.videoId} />}
      <Header
        src={"/assests/allCourses.png"}
        headerName={helperName}
        functionClick={() => {
          dispatch(coursesAction.setIsOpenedVideo());
        }}
        buttonName={"اضافة فيديو"}
      />
      <div className="course-video-container">
        {/* <div className="video-src">
          <video src="https://drive.google.com/uc?id=1FI9lkSkqnwyQmrXHfaIa61P7i56fRx_A&export=download"></video>
        </div> */}
        <div className="video-data">
          {videoData?.fileShowId ? (
            <>
              <p>{videoData?.fileShowId}</p>
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
                  <div
                    className="delete-btn"
                    onClick={() => {
                      dispatch(coursesAction.setIsOpenedAttachment());
                    }}
                  >
                    اضافة ملف
                  </div>
                ) : null}
              </p>
            )
          }

          <div className="help-delete">
            {deleteLoading ? (
              <div className="delete-video">
                <RotatingLines
                  strokeColor="rgb(214, 76, 115)"
                  visible={true}
                  height="20"
                  width="20"
                  color="rgb(214, 76, 115)"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <button
                className="delete-btn"
                disabled={!videoData}
                onClick={() => {
                  dispatch(deleteVideo(videoData.videoId, videoData.courseId));
                }}
              >
                {videoData ? "حذف هذا الفيديو" : "لايوجد فيديو لعرضه"}
              </button>
            )}
          </div>
        </div>
        <div className="video-list">
          <div className="video-list-helper">
            {courseVideos?.map((e, index) => {
              return <ChooseVideoSrc key={index} e={e} index={index + 1} />;
            })}
            {/* <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div>
            <div className="chooseVideoSrc">hi</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideos;
