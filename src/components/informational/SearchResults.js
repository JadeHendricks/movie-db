import React from 'react';
import svg from "../../images/sprite.svg";

const SearchResults = () => {
  return (
    <section className="searchResults">
      <div className="container container--small">
        <h2 className="searchResults__title">Search results for value</h2>
        <div className="searchResults__wrapper">
          <div className="searchCard">
            <a href="/">
              <img src="https://i.kinja-img.com/gawker-media/image/upload/s--BUtczaGT--/c_scale,f_auto,fl_progressive,q_80,w_800/zmodtux4b3urnluvrq5w.jpg" className="searchCard__image" alt="alt" title="title"></img>
              <div className="searchCard__content">
                <h5 className="searchCard__title">Move Title</h5>
                <p className="searchCard__desc">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>
          <div className="searchCard">
            <a href="/">
              <img src="https://i.kinja-img.com/gawker-media/image/upload/s--BUtczaGT--/c_scale,f_auto,fl_progressive,q_80,w_800/zmodtux4b3urnluvrq5w.jpg" className="searchCard__image" alt="alt" title="title"></img>
              <div className="searchCard__content">
                <h5 className="searchCard__title">Move Title</h5>
                <p className="searchCard__desc">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>
          <div className="searchCard">
            <a href="/">
              <img src="https://i.kinja-img.com/gawker-media/image/upload/s--BUtczaGT--/c_scale,f_auto,fl_progressive,q_80,w_800/zmodtux4b3urnluvrq5w.jpg" className="searchCard__image" alt="alt" title="title"></img>
              <div className="searchCard__content">
                <h5 className="searchCard__title">Move Title</h5>
                <p className="searchCard__desc">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>
          <div className="searchCard">
            <a href="/">
              <img src="https://i.kinja-img.com/gawker-media/image/upload/s--BUtczaGT--/c_scale,f_auto,fl_progressive,q_80,w_800/zmodtux4b3urnluvrq5w.jpg" className="searchCard__image" alt="alt" title="title"></img>
              <div className="searchCard__content">
                <h5 className="searchCard__title">Move Title</h5>
                <p className="searchCard__desc">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="pagination">
            <div className="pagination__prev">
              <button className="button button--white">
                <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-left`}></use></svg>
                Previous
              </button>
            </div>
            <div className="pagination__next">
              <button className="button button--white">
                <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-right`}></use></svg>
                Next
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SearchResults;
