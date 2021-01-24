import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <a className="github" href="https://github.com/ZakharovOwl">
        <p>github.com</p>
        <p>ZakharovOwl</p>
      </a>
      <ul>
        <li>
          <NavLink
            to="/mytweets"
            activeClassName="link_active"
            className="list__link"
          >
            My tweets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            activeClassName="link_active"
            className="list__link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newstutby"
            activeClassName="link_active"
            className="list__link"
          >
            TUT.by
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newshabr"
            activeClassName="link_active"
            className="list__link"
          >
            Habr
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/finance"
            activeClassName="link_active"
            className="list__link"
          >
            Finance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
