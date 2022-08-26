import React from "react";
import classes from "./Person.module.css";
import { Navbar, Nav, Container, Figure } from "react-bootstrap";

const Person = (props) => {
  let { username } = props;
  if (username.length > 15) {
    username = username.slice(0, 14);
  }
  return (
    <Nav.Link style={{color: 'black'}}
      href="#profile"
    >
      <div className={classes.person}>
        <div className={classes.img}>
          {" "}
          <img id="profile-photo" src={props.profile} /> <hr />
        </div>
        <h1>{username}</h1>
      </div>
    </Nav.Link>
  );
};

export default Person;
