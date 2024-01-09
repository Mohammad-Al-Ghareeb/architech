import "./Pagination.css";
export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPage = [];
  for (let i = 1; i <= pages; i++) {
    generatedPage.push(i);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((current) => current - 1)}
        disabled={currentPage === 1}
        className="page previous"
      >
        <img src="/assests/right.png" alt="" />
      </button>
      {generatedPage.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={currentPage === page ? "page pagi active" : "page"}
        >
          {page}
        </div>
      ))}
      <button
        onClick={() => {
          setCurrentPage((current) => current + 1);
        }}
        disabled={currentPage === pages}
        className="page next"
      >
        <img src="/assests/left.png" alt="" />
      </button>
    </div>
  );
};
