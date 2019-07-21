import React from 'react';
import svg from "../../images/sprite.svg";

const Pagination = ({ pages, nextPage, currentPage }) => {
  return (
    <div className="pagination">
      <div className="pagination__prev">
      { currentPage > 1 ? <button className="button button--white" onClick={() => nextPage(currentPage - 1)} >
        <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-left`}></use></svg>Previous</button> : ""}
      </div>
      { currentPage < pages + 1 ? <div className="pagination__next">
        <button className="button button--white" onClick={() => nextPage(currentPage + 1)}> 
        <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-right`}></use></svg>Next</button>
      </div>: ""}

    </div>
  )
}

export default Pagination;