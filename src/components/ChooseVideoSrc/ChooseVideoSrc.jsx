import { useDispatch } from "react-redux";
import "./ChooseVideoSrc.css";
import { coursesAction } from "../../redux/slices/coursesSlice";
import { getAttachmentByVideoId } from "../../redux/apiCalls/coursesApiCall";

const ChooseVideoSrc = ({ e, index }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="chooseVideoSrc"
      onClick={() => {
        dispatch(coursesAction.removeVideoAttachment());
        dispatch(coursesAction.setVideoData(e));
        dispatch(getAttachmentByVideoId(e.videoId));
      }}
    >
      <div className="video-src-data">
        <div className="video-src-data-text">
          <div className="number">{index}</div>
          <div className="video-title">
            <p>{e.videoName}</p>
            <p></p>
          </div>
        </div>
      </div>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.097632 7.31658 -0.0976321 6.68342 0.292893 6.29289L6.29289 0.292894C6.68342 -0.0976313 7.31658 -0.0976314 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z"
          fill="#222831"
        />
      </svg>

      {/* <img src="/assests/leftSrc.png" alt="" /> */}
    </div>
  );
};

export default ChooseVideoSrc;
