import { useDispatch, useSelector } from "react-redux";
import { deleteDashUsers } from "../../redux/apiCalls/dashUserApiCall";
import "./DashTable.css";

const DashTable = ({ users, currentPage, setCurrentPage }) => {
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleDelete = (userId) => {
    dispatch(deleteDashUsers(userId, currentPage, setCurrentPage));
  };

  // console.log(typeof userId);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>اسم المستخدم</th>
          <th>رقم الموبايل</th>
          <th>تاريخ الاضافة</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((row) => (
          <tr key={row.id}>
            <td>{row.userName}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.createdAt}</td>
            <td>
              {userId !== row.id && (
                <button onClick={() => handleDelete(row.id)}>
                  <img src="/assests/delete.png" alt="" />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashTable;
