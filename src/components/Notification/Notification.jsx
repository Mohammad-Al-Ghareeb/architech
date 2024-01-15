import "./Notification.css";

const Notification = ({ chat, isChecked, handleCheckboxChange }) => {
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="title">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(chat.id)}
          />
          <span>{chat.title}</span>
        </div>
        <div className="data">
          <div className="sender">
            <p>المرسل</p>
            <span>{chat.name}</span>
          </div>
          <div className="data">
            {chat.createdAt}
            {/* <p>{chat.createdAt}</p> */}
            <img src="/assests/time.png" alt="" />
          </div>
        </div>
      </div>
      <div className="chat-body">
        <p>{chat.body}</p>
      </div>
    </div>
  );
};

export default Notification;
