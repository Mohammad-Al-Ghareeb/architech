import { useDispatch } from "react-redux";
import "./UsersTable.css";
import { deleteAppUsers } from "../../redux/apiCalls/appUsersApiCall";

const UsersTable = ({ users, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const handleDelete = (userId) => {
    dispatch(deleteAppUsers(userId, currentPage, setCurrentPage));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>اسم المستخدم</th>
          <th>رقم الموبايل</th>
          <th>البريد الالكتروني</th>
          <th>تاريخ الاضافة</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((row) => (
          <tr key={row.id}>
            <td>{row.userName}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.email}</td>
            <td>{row.createdAt}</td>
            <td>
              {
                <button onClick={() => handleDelete(row.id)}>
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

export default UsersTable;
