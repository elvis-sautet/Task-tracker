import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header() {
  const onClick = (e) => {
    alert();
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
}

export default Header;
