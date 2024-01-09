import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import "./DashUsersPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getDashUsers } from "../../redux/apiCalls/dashUserApiCall";
import { dashUserActions } from "../../redux/slices/dashUserSlice";
import DashUsersLayout from "../../components/DashUsersLayout/DashUsersLayout";
import "../../components/DashUsersLayout/DashUsersLayout.css";
import DashTable from "../../components/DashTable/DashTable";
const DASH_USER_PER_PAGE = 7;

const DashUsersPage = () => {
  const { dashUsers, numberOfDashUsers, isOpenedDash } = useSelector(
    (state) => state.dashUser
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfDashUsers / DASH_USER_PER_PAGE);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashUsers(currentPage, DASH_USER_PER_PAGE));
  }, [currentPage, dispatch]);

  return (
    <div className="dash-users">
      {isOpenedDash && (
        <DashUsersLayout
          currentPage={currentPage}
          dashUserPerPage={DASH_USER_PER_PAGE}
        />
      )}
      <Header
        src={"/assests/dash-user.png"}
        headerName={"مستخدمي اللوحة"}
        yes={true}
        number={numberOfDashUsers}
        nameNumber={"مستخدمي اللوحة"}
        buttonName={"اضافة أدمن جديد"}
        functionClick={() => {
          dispatch(dashUserActions.setIsOpenedDash());
        }}
      />

      <div className="dash-users-container">
        <DashTable
          users={dashUsers}
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

export default DashUsersPage;
