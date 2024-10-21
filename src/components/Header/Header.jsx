import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";



const navLinks = [
  
  {
    display: "About",
    url: "/About",
  },
  {
    display: "Courses",
    url: "/Course",
  
  },
  {
    display: "Free Courses",
    url: "#",
  },
  {
    display: "Online Tuition",
    url: "OnlineTuition",
  },
  {
    display: "Olympiad",
    url: "#",
  },
  {
    display: "Robotics",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/ContactUs",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> SunShine
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                    {item.dropdown && (
                      <div className="dropdown">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a key={dropIndex} href={dropItem.url}>
                            {dropItem.display}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
