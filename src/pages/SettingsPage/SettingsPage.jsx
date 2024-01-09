import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./SettingsPage.css";
import { useEffect, useState } from "react";
import {
  getSettings,
  updateSettings,
} from "../../redux/apiCalls/settingsApiCall";
import { RotatingLines } from "react-loader-spinner";
const SettingsPage = () => {
  const { who, privacy, loading } = useSelector((state) => state.setting);
  const [whoValue, setWhoValue] = useState(who);
  const [privacyValue, setPrivacyValue] = useState(privacy);
  const handleClick = () => {
    const data = {
      aboutUs: whoValue,
      privacy: privacyValue,
    };
    dispatch(updateSettings(data));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings(setWhoValue, setPrivacyValue));
  }, []);
  return (
    <div className="settings">
      <Header
        src={"/assests/setting-header.png"}
        headerName={"الاعدادات"}
        buttonName={
          loading ? (
            <RotatingLines
              strokeColor="#fff"
              visible={true}
              height="20"
              width="20"
              color="#fff"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "حفظ التغيرات"
          )
        }
        functionClick={handleClick}
      />

      <div className="settings-container">
        <div className="who">
          <p>من هم Architech ؟</p>
          <textarea
            value={whoValue ? whoValue : "جار التحميل..."}
            onChange={(e) => {
              setWhoValue(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="who privacy">
          <p>شروط الخصوصية</p>
          <textarea
            value={privacyValue ? privacyValue : "جار التحميل..."}
            onChange={(e) => {
              setPrivacyValue(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
