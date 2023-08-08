import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doesntExist"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Error
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
