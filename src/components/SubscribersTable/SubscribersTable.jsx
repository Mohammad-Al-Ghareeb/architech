import { useDispatch } from "react-redux";
import "./SubscribersTable.css";
import { deleteSubscribers } from "../../redux/apiCalls/subscribersApiCall";

const SubscribersTable = ({ subscribers, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const handleDelete = (code, userName) => {
    const user = {
      userName,
      code,
    };
    dispatch(deleteSubscribers(user, currentPage, setCurrentPage));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>اسم المشترك</th>
          <th>كود المشترك</th>
          <th>وقت الاشتراك</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {subscribers?.map((row, index) => (
          <tr key={index}>
            <td>{row.userName}</td>
            <td>{row.code}</td>
            <td>{row.createdAt}</td>
            <td>
              {
                <button onClick={() => handleDelete(row.code, row.userName)}>
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

export default SubscribersTable;
