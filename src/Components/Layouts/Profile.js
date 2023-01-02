import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./Profile.module.css";

const localUser = localStorage.getItem("loggedInUser");
const storedUser = JSON.parse(localUser);

const Profile = (props) => {
  const describe =
    props.userLogin.describe.length < 600
      ? props.userLogin.describe
      : props.userLogin.describe.slice(0, 600);
  // console.log(props.profile)

  return (
    <Card className={classes.card}>
      <Card.Img
        className={classes.img}
        variant="top"
        src={props.userLogin.profile}
      />
      <Card.Body>
        <Card.Title className={classes.title}>
          {props.userLogin.username}
        </Card.Title>
        <Card.Text>{describe}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;
