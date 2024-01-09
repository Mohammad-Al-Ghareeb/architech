import { useDispatch } from "react-redux";
import { deleteCenter } from "../../redux/apiCalls/centersApiCall";
import "./CentersTable.css";

const CentersTable = ({ centers, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const handleDelete = (userId) => {
    dispatch(deleteCenter(userId, currentPage, setCurrentPage));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>اسم المركز</th>
          <th>عنوان المركز</th>
          <th>رقم الموبايل</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {centers?.map((row) => (
          <tr key={row.centerId}>
            <td>{row.centerName}</td>
            <td>{row.centerAddress}</td>
            <td>{row.phoneNumbers.map((e, id) => (id && "-") + e)}</td>
            <td>
              {
                <button onClick={() => handleDelete(row.centerId)}>
                  <img src="/assests/delete.png" alt="" />
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CentersTable;
