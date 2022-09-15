import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="nav-container">
      <ul className="nav-links">
        <CustomLink to="/">Bookstore CMS</CustomLink>
        <CustomLink to="/">BOOKS</CustomLink>
        <CustomLink to="/categories">CATEGORIES</CustomLink>
      </ul>
      <div className="user-profile"><i className="fa-solid fa-user user-icon" /></div>
    </nav>
  </>
);

const CustomLink = ({ to, children }) => {
  const isActive = useMatch({ path: useResolvedPath(to).pathname, end: true });

  return (
    <li>
      <Link className={isActive ? 'active' : ''} to={to}>{children}</Link>
    </li>
  );
};

export default Navbar;
