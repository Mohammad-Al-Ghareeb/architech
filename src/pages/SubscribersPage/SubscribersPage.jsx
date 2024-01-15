import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./SubscribersPage.css";
import { subscribersAction } from "../../redux/slices/subscribersSlice";
import SubscribersTable from "../../components/SubscribersTable/SubscribersTable";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { getSubscribers } from "../../redux/apiCalls/subscribersApiCall";
import AddCode from "../../components/AddCode/AddCode";
import AddUserToCourse from "../../components/AddUserToCourse/AddUserToCourse";
const SUBSCRIBERS_PER_PAGE = 7;
const SubscribersPage = () => {
  const {
    subscribers,
    numberOfSubscribers,
    isOpenedSubscriber,
    isOpenedUserToCourse,
  } = useSelector((state) => state.subscriber);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfSubscribers / SUBSCRIBERS_PER_PAGE);
  useEffect(() => {
    dispatch(getSubscribers(currentPage, SUBSCRIBERS_PER_PAGE));
  }, [currentPage, dispatch]);
  return (
    <div className="subscribers-page">
      {isOpenedSubscriber && <AddCode />}
      {isOpenedUserToCourse && (
        <AddUserToCourse
          currentPage={currentPage}
          setCurrent={setCurrentPage}
        />
      )}

      <Header
        src={"/assests/subscriberImg.png"}
        headerName={"المشتركين"}
        yes={true}
        sui={true}
        number={numberOfSubscribers}
        nameNumber={"المشتركين"}
        buttonName={"اضافة كود جديد"}
        buttonNameTwo={"اضافة مشترك"}
        functionTwoClick={() => {
          dispatch(subscribersAction.setIsOpenedUserToCourse());
        }}
        functionClick={() => {
          dispatch(subscribersAction.setIsOpenedSubscribers());
        }}
      />

      <div className="subscribers-page-containers">
        <SubscribersTable
          subscribers={subscribers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default SubscribersPage;
