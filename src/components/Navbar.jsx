import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "blue",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: 20,
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar
      className={classes.header}
      position="static
    "
    >
      <Toolbar>
        <NavLink className={classes.tabs} to="all">
          All Users
        </NavLink>
        <NavLink className={classes.tabs} to="add">
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
