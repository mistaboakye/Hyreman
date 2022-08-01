import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import "App.css"
import Hyreman from "./Hyreman.svg";
import logoDashboard from "./dashboard.svg";
import logoJob from "./job.svg";
import logoCandidate from "./candidates1.svg";
import logoTestLibrary from "./testlibrary1.svg";
import logoResumeBank from "./resumebank2.svg";



const Menu = () => {
  const menuItems = [
    {
      icon: logoDashboard,
      name: "Dashboard",
      link: "/",
      isActive: true,
    },
    {
      icon: logoJob,
      name: "Job",
      link: "/job",
      isActive: false,
    },
    {
      icon: logoCandidate,
      name: "Candidate",
      link: "/candidate",
      isActive: false,
    },
    {
      icon: logoTestLibrary,
      name: "Test Library",
      link: "/testlibrary",
      isActive: false,
    },
    {
      icon: logoResumeBank,
      name: "Resume Bank",
      link: "/resumebank",
      isActive: false,
    },
  ];
  return (
    <div className="menuBar">
      <div className="hyremanLogo">
        <img src={Hyreman} />
      </div>
      <div className="menuContainer">
        {menuItems.map((menuItem, index) => {
          return (
            <NavLink to={menuItem.link} className="">
              {({ isActive }) => (
                <div
                  className={isActive ? "menuDecoration" : "menuDecoration1"}
                >
                  <img src={menuItem.icon} />

                  <p className={isActive ? "menuText" : "menuText1"}>
                    {menuItem.name}
                  </p>
                </div>
              )}
            </NavLink>
          );
        })}

        {/* <a href="" className="menuDecoration1">
          <img src={logoJob} />
          <text className="menuText1">Jobs</text>
        </a>
        <a href="" className="menuDecoration1">
          <img src={logoCandidates} />
          <text className="menuText1">Candidates</text>
        </a>
        <a href="" className="menuDecoration1">
          <img src={logoTestLibrary} />
          <text className="menuText1">Test Library</text>
        </a>
        <a href="" className="menuDecoration1">
          <img src={logoResumeBank} />
          <text className="menuText1">Resume Bank</text>
        </a> */}
      </div>
    </div>
  );
};

export default Menu;
