import "./ChatsPage.css";
import Header from "../../components/Header/Header";
import Chat from "../../components/Chat/Chat";
import { Pagination } from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChats, getChats } from "../../redux/apiCalls/chatApiCall";
const CHAT_PER_PAGE = 3;
const ChatsPage = () => {
  const [selectedChats, setSelectedChats] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const { chats, numberOfChats } = useSelector((state) => state.chat);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfChats / CHAT_PER_PAGE);
  useEffect(() => {
    getChats();
    dispatch(getChats(currentPage, CHAT_PER_PAGE));
  }, [currentPage, dispatch]);

  const handleCheckboxChange = (chatId) => {
    if (selectedChats.includes(chatId)) {
      setSelectedChats(selectedChats.filter((id) => id !== chatId));
    } else {
      setSelectedChats([...selectedChats, chatId]);
    }
  };

  const handleSelectAllChats = () => {
    if (selectAll) {
      setSelectedChats([]);
    } else {
      const allUserIds = chats?.map((user) => user.id);
      setSelectedChats(allUserIds);
    }
    setSelectAll((prevSelectAll) => !prevSelectAll);
  };

  const handleDeleteSelectedChats = (selectedUsers) => {
    selectedUsers?.forEach((userId) => {
      dispatch(deleteChats(userId, currentPage, setCurrentPage));
      setSelectedChats([]);
    });
  };

  return (
    <div className="chats">
      <Header
        src={"/assests/chat-icon.png"}
        headerName={"المحادثات"}
        yes={true}
        nameNumber={"المحادثات"}
        number={numberOfChats}
        buttonName={"حفظ التغيرات"}
        functionClick={() => {}}
      />

      <div className="chats-container">
        <div className="select-all">
          <div className="select">
            <input
              onClick={handleSelectAllChats}
              type="checkbox"
              id="select-all"
              checked={selectedChats.length >= 3}
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
          {chats?.map((chat) => {
            return (
              <Chat
                key={chat.id}
                chat={chat}
                isChecked={selectedChats?.includes(chat.id)}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })}
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

export default ChatsPage;
