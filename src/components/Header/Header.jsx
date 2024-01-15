import "./Header.css";

const Header = ({
  src,
  headerName,
  yes,
  nameNumber,
  number,
  sui,
  buttonName,
  functionClick,
  functionTwoClick,
  buttonNameTwo,
}) => {
  return (
    <div className="header">
      <div className="header-right">
        <img src={src} alt="" />
        <p className="header-name">{headerName}</p>
        {yes && (
          <>
            <img src="/assests/Line.png" alt="" />
            <div className="header-number">
              <span>{nameNumber}</span>
              <span>({number})</span>
            </div>
          </>
        )}
      </div>
      <div className="test-header">
        <button onClick={() => functionClick()}>{buttonName}</button>
        {sui && (
          <button
            style={{ marginRight: "10px" }}
            onClick={() => functionTwoClick()}
          >
            {buttonNameTwo}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
