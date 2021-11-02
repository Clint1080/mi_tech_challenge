import React from "react";
import logo from "../assets/Logo.png";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    //allowing the browser to open a new tab using ctrl click
    if (e.metaKay || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  if (className === "contact_header_background") {
    return (
      <div className="header contact_header_background">
        <img src={logo} className="logo" alt="logo"></img>
        <a onClick={onClick} className={className} href={href}>
          {children}
        </a>
      </div>
    );
  }
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo"></img>
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
