import { useDispatch, useSelector } from "react-redux";
import "./AddCode.css";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { subscribersAction } from "../../redux/slices/subscribersSlice";
import { addCode } from "../../redux/apiCalls/subscribersApiCall";
import { toast } from "react-toastify";

const AddCode = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const { loading } = useSelector((state) => state.subscriber);

  const handleAddCourse = () => {
    if (code.trim === "") {
      return toast.error("أدخل الكود");
    }
    const Code = { code };
    dispatch(addCode(Code));
    setCode("");
  };

  return (
    <div className="dash-users-layout ">
      <div className="check add-code-lay">
        <div className="add-new">
          <p>إضافة كود جديد ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(subscribersAction.setIsOpenedSubscribers());
            }}
          />
        </div>
        <img src="/assests/codeImg.png" />
        <form className="form form-dash">
          <label>أدخل الكود</label>
          <input
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            type="text"
            placeholder="أضف كود"
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

export default AddCode;
