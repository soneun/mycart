import "./Pagination.css";

const Pagination = ({ total, perPage, onClick, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i); //페이지 수만큼 배열에 숫자를 입력
  }
  //현재 페이지가 없을 경우 첫페이지는 1
  currentPage = currentPage ? currentPage : 1;

  return (
    <>
      {pages.length > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={
                  parseInt(currentPage) === page
                    ? "pagination_button active"
                    : "pagination_button"
                }
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Pagination;
