import "./NotificationsPage.css";
import Header from "../../components/Header/Header";
import Chat from "../../components/Chat/Chat";
import { Pagination } from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNotifications,
  getNotifications,
} from "../../redux/apiCalls/notificationsApiCall";
import SendNotifications from "../../components/SendNotifications/SendNotifications";
import { notificationsAction } from "../../redux/slices/notificationsSlice";
import Notification from "../../components/Notification/Notification";

const CHAT_PER_PAGE = 3;

const NotificationsPage = () => {
  const [selectedChats, setSelectedChats] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const { notifications, numberOfNotifications, isOpenedNotifications } =
    useSelector((state) => state.notification);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfNotifications / CHAT_PER_PAGE);

  useEffect(() => {
    dispatch(getNotifications(currentPage, CHAT_PER_PAGE));
  }, [currentPage, dispatch]);

  const handleCheckboxChange = (chatId) => {
    if (selectedChats.includes(chatId)) {
      setSelectedChats((prevSelectedChats) =>
        prevSelectedChats.filter((id) => id !== chatId)
      );
    } else {
      setSelectedChats((prevSelectedChats) => [...prevSelectedChats, chatId]);
    }
  };

  const handleSelectAllChats = () => {
    if (selectAll) {
      setSelectedChats([]);
    } else {
      const allChatIds = notifications?.map((chat) => chat.id);
      setSelectedChats(allChatIds);
    }
    setSelectAll((prevSelectAll) => !prevSelectAll);
  };

  const handleDeleteSelectedChats = (selectedChatIds) => {
    selectedChatIds?.forEach((chatId) => {
      dispatch(deleteNotifications(chatId, currentPage, setCurrentPage));
    });
    setSelectedChats([]);
  };

  return (
    <div className="chats">
      {isOpenedNotifications && (
        <SendNotifications
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Header
        src={"/assests/chat-icon.png"}
        headerName={"المحادثات"}
        yes={true}
        nameNumber={"المحادثات"}
        number={numberOfNotifications}
        buttonName={"اضافة اشعار"}
        functionClick={() => {
          dispatch(notificationsAction.setIsOpenedNotifications());
        }}
      />

      <div className="chats-container">
        <div className="select-all">
          <div className="select">
            <input
              onClick={handleSelectAllChats}
              type="checkbox"
              id="select-all"
              checked={selectedChats.length === notifications?.length}
            />
            <label>تحديد الكل</label>
          </div>
          <button
            className="delete"
            onClick={() => handleDeleteSelectedChats(selectedChats)}
          >
            <img src="/assests/delete.png" alt="" />
          </button>
        </div>
        <div className="chats-content">
          {notifications?.map((chat) => (
            <Notification
              key={chat.id}
              chat={chat}
              isChecked={selectedChats?.includes(chat.id)}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
