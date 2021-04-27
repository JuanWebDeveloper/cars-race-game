import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <h1 className="text-white">Cars Race Game</h1>
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Layout;
