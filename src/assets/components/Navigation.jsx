import React from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import '../../../src/index.css';

function Navigation() {
  const activeStyle = {
    color: 'yellow',
  };

  return (
    <>
      <nav className="bg-pink-900 h-14 mb-10 px-3">
        <div className="container mx-auto h-full flex justify-between items-center">
          <h1 className="logo text-gray-50 font-bold sm:text-sm">
            <Link to="/">Movie App</Link>
          </h1>
          <ul className="flex items-center text-gray-50 font-sm sm:text-sm">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Watchlist
              </NavLink>
            </li>
            <li className="ml-10 sm:ml-5 sm:-text-xs">
              <NavLink
                to="/watched"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Watched
              </NavLink>
            </li>

            <li className="ml-10 sm:hidden">
              <Link
                to="/add"
                className="border-2 inline-block border-gray-55 px-3 py-1 text-center rounded-3xl box-border hover:bg-gray-50 hover:text-black focus:bg-gray-50 focus:text-black"
              >
                <i className="ri-add-fill"></i>
                Add
              </Link>
            </li>
            <li className="add-btn hidden p-0 h-10 w-10 sm:flex sm:justify-center sm:content-center fixed bottom-5 right-5 bg-pink-900 text-white rounded-full shadow-lg z-50 shadow-slate-700">
              <Link to="/add">
                <i className="ri-add-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
