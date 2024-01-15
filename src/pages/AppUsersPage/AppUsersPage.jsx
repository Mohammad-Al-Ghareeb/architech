import "./AppUsersPage.css";
import Header from "../../components/Header/Header";
import UsersTable from "../../components/UsersTable/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAppUsers } from "../../redux/apiCalls/appUsersApiCall";
import { appUserAction } from "../../redux/slices/appUsersSlice";
import { Pagination } from "../../components/Pagination/Pagination";
import AppUsersLayout from "../../components/AppUsersLayout/AppUsersLayout";
const App_USER_PER_PAGE = 7;
const AppUsersPage = () => {
  const { appUsers, numberOfAppUsers, isOpenedApp } = useSelector(
    (state) => state.appUser
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfAppUsers / App_USER_PER_PAGE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppUsers(currentPage, App_USER_PER_PAGE));
  }, [currentPage, dispatch]);

  return (
    <div className="app-users-page">
      {isOpenedApp && (
        <AppUsersLayout
          currentPage={currentPage}
          appUserPerPage={App_USER_PER_PAGE}
        />
      )}
      <Header
        src={"/assests/appUsersPhoto.png"}
        headerName={"مستخدمي التطبيق"}
        yes={true}
        number={numberOfAppUsers}
        nameNumber={"مستخدمي التطبيق"}
        buttonName={"اضافة مستخدم جديد"}
        functionClick={() => {
          dispatch(appUserAction.setIsOpenedApp());
        }}
      />

      <div className="app-users-container">
        <UsersTable
          users={appUsers}
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

export default AppUsersPage;
