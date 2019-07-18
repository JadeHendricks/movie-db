import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import svg from "../../images/sprite.svg";

const Navbar = (props) => {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Spider Man");

  useEffect(() => {
    props.history.push(`/search-results/${query}`);
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <Fragment>
      <div className="navSpacer"></div>
      <nav className="nav">
        <div className="container">
          <div className="navMobile">
              <Link className="nav__logo" to="/">MovieDB</Link>
              <svg className="navMobile__burgericon">
                <use xlinkHref={`${svg}#icon-menu`}></use>
              </svg>
          </div>
          <div className="nav__container">
            <Link className="nav__logo onlyDesktop" to="/">MovieDB</Link>
            <form className="nav__searchContainer" onSubmit={getSearch}>
                <svg className="nav__searchIcon">
                  <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                </svg>
                <input className="nav__search input" type="search" name="search" placeholder="Search..." value={search} onChange={updateSearch}/>
            </form>
            <ul className="nav__ul">
              <Link to="/login">
                <li className="nav__li">
                    <button className="button button--skeleton" type="button">Log in</button>
                </li>
              </Link>
              <Link to="/register">
                <li className="nav__li">
                  <button className="button button--lightBlue" type="button">Sign up</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default withRouter(Navbar);
