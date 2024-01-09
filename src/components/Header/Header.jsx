import "./Header.css";

const Header = ({
  src,
  headerName,
  yes,
  nameNumber,
  number,
  buttonName,
  functionClick,
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
      <button onClick={() => functionClick()}>{buttonName}</button>
    </div>
  );
};

export default Header;
