import React, { useState } from "react";
import AppBarProps from "./app-bar.props";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import NavItem from "../common/types/nav-item";
import { NavLink } from "react-router-dom";

const rightNavigation: NavItem[] = [
  {
    name: "Login",
    url: "/login"
  },
  {
    name: "Register",
    url: "/register"
  }
];

const AppBarComponent = (props: AppBarProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header>
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <NavLink to="/">
            <strong className="white-text">Learn IT</strong>
          </NavLink>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />
        <MDBCollapse isOpen={isMobileNavOpen} navbar>
          <MDBNavbarNav right>
            {rightNavigation.map(navItem => (
              <MDBNavItem key={navItem.name}>
                <MDBNavLink to={navItem.url}>{navItem.name}</MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
};

export default AppBarComponent;
