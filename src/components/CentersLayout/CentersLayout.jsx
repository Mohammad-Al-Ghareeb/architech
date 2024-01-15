import { useDispatch, useSelector } from "react-redux";
import "./CentersLayout.css";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { centersActions } from "../../redux/slices/centersSlice";
import { addCenter } from "../../redux/apiCalls/centersApiCall";

const CentersLayout = ({ currentPage, centerPerPage }) => {
  const dispatch = useDispatch();
  const [centerName, setCenterName] = useState("");
  const [centerAddress, setCenterAddress] = useState("");
  const [oneNumber, setOneNumber] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const { loading } = useSelector((state) => state.dashUser);

  const handleAddAdmin = () => {
    phoneNumbers.push(oneNumber);
    console.log(phoneNumbers);
    const center = {
      centerName,
      centerAddress,
      phoneNumbers,
      description: "",
    };
    dispatch(addCenter(center, currentPage, centerPerPage));
    setCenterName("");
    setCenterAddress("");
    setPhoneNumbers([]);
    setOneNumber("");
  };

  return (
    <div className="dash-users-layout">
      <div className="check">
        <div className="add-new">
          <p>إضافة مركز جديد ؟</p>
          <img
            src="/assests/deleteIcon.png"
            alt=""
            onClick={() => {
              dispatch(centersActions.setIsOpenedCenters());
            }}
          />
        </div>
        <img src="/assests/centerLayout.png" />
        <form className="form form-dash">
          <label>أدخل اسم المركز</label>
          <input
            value={centerName}
            onChange={(e) => {
              setCenterName(e.target.value);
            }}
            type="text"
            placeholder="ahmad sleby"
          />
          <label>أدخل عنوان المركز</label>
          <input
            value={centerAddress}
            onChange={(e) => {
              setCenterAddress(e.target.value);
            }}
            type="text"
            placeholder="المحافظة-مبنى-القنصلية"
          />
          <label>رقم الهاتف</label>
          <input
            value={oneNumber}
            onChange={(e) => {
              setOneNumber(e.target.value);
            }}
            type="text"
            placeholder="099999"
          />
          {/* <div
              className="add-new-number"
              onClick={() => {
                phoneNumbers.push(oneNumber);
                setOneNumber("");
              }}
            >
              أضف رقم اخر؟
            </div> */}
          <div className="btn" onClick={handleAddAdmin}>
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

export default CentersLayout;
