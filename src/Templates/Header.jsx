import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="lg:flex lg:justify-between border-b text-2xl py-3">
      <div className="flex justify-between items-center mx-5">
        <div>
          <p>LOGO!</p>
        </div>
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={`lg:flex ${
          isOpen ? "block" : "hidden"
        } lg:block flex-col lg:flex-row gap-5 mx-5`}
      >
        <ul className="flex flex-col lg:flex-row gap-5">
          <li>
            <NavLink
              onClick={closeMenu}
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-50"
              }
            >
              Početna
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-50"
              }
              to="/umetnici"
            >
              Umetnici
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-50"
              }
              to="/galerija"
            >
              Galerija
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-50"
              }
              to="/kontakt"
            >
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-50"
              }
              to="/me"
            >
              O meni
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
