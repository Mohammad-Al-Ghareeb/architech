import "./CentersPage.css";
import Header from "../../components/Header/Header";
import CentersTable from "../../components/CentersTable/CentersTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCenters } from "../../redux/apiCalls/centersApiCall";
import { Pagination } from "../../components/Pagination/Pagination";
import CentersLayout from "../../components/CentersLayout/CentersLayout";
import { centersActions } from "../../redux/slices/centersSlice";

const Centers_PER_PAGE = 7;
const CentersPage = () => {
  const { centers, numberOfCenters, isOpenedCenters } = useSelector(
    (state) => state.center
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfCenters / Centers_PER_PAGE);
  useEffect(() => {
    dispatch(getCenters(currentPage, Centers_PER_PAGE));
  }, [currentPage, dispatch]);
  return (
    <div className="centers">
      {isOpenedCenters && (
        <CentersLayout
          currentPage={currentPage}
          centerPerPage={Centers_PER_PAGE}
        />
      )}
      <Header
        src={"/assests/centers.png"}
        headerName={"مراكز الخدمة"}
        yes={true}
        nameNumber={"جميع المراكز"}
        number={numberOfCenters}
        buttonName={"اضافة مستخدم جديد"}
        functionClick={() => {
          dispatch(centersActions.setIsOpenedCenters());
        }}
      />

      <div className="centers-container">
        <CentersTable
          centers={centers}
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

export default CentersPage;
