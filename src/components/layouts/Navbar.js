import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import svg from "../../images/sprite.svg";

const Navbar = (props) => {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [redirect, setRedirect] = useState(false);

//   $(".navMobile__burgericon").on("click", function() {
//     $(".nav__container").slideToggle(200);
//   });

//   $(window).on("resize", function() {
//     if ($(window).width() > 767) {
//       $(".nav__container").css("display", "flex");
//     }
//   });
// })();
  const navContainer = React.createRef();


  useEffect(() => {
    if (redirect) {
      props.history.push(`/search-results/${query}`);
      setRedirect(false);
    }
    // eslint-disable-next-line
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setRedirect(true);
  }

  const openNav = () => {
    navContainer.current.classList.toggle("navToggle");
  }

  return (
    <Fragment>
      <div className="navSpacer"></div>
      <nav className="nav">
        <div className="container">
          <div className="navMobile">
              <Link className="nav__logo" to="/">MovieDB</Link>
              <svg className="navMobile__burgericon" onClick={openNav}>
                <use xlinkHref={`${svg}#icon-menu`}></use>
              </svg>
          </div>
          <div className="nav__container" ref={navContainer}>
            <Link className="nav__logo onlyDesktop" to="/">MovieDB</Link>
            <form className="nav__searchContainer" onSubmit={getSearch}>
                <svg className="nav__searchIcon">
                  <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                </svg>
                <input className="nav__search input" type="search" name="search" placeholder="Search..." value={search} onChange={updateSearch}/>
            </form>
            <ul className="nav__ul">
                <li className="nav__li">
                    <Link className="button button--skeleton" to="/login" type="button">Log in</Link>
                </li>
                <li className="nav__li">
                  <Link className="button button--lightBlue" to="/register" type="button">Sign up</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default withRouter(Navbar);
