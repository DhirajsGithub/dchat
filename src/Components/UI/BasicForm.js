import React, { useState, useRef, Fragment } from "react";
import classes from "./BasicForm.module.css";
import { FloatingLabel, Form, Button, Figure } from "react-bootstrap";


function BasicForm(props) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpLogin, setSignUpLogin] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const describeRef = useRef();

  const isValid = (value) => value.trim().length > 5;
  const isDescribeValid = (value) => value.trim().length > 19;
  
  let formIsValid = false;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSignUpLogin(false);
    props.handleModalOverlay();

  };
  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignUpData = (event) =>{
    const enternedUsername = usernameRef.current.value;
    const enternedpassword = passwordRef.current.value;
    const enternedDescribe = describeRef.current.value;
  
    if(isValid(enternedUsername) && isValid(enternedpassword) && isDescribeValid(enternedDescribe)){
      formIsValid = true;
    }
    if(!formIsValid){
      alert("please enter a valid email 📧 and strong 💪 password 🎫 and describe yourself 💩 🐵 🐒 in atleast 20 words")
      return;
    }
    const details = {
      username : enternedUsername,
      password : enternedpassword,
      describe : enternedDescribe,
      profile : null,
    }
    setIsSignUp(false);
    setSignUpLogin(false);
    props.handleModalOverlay(details);
    props.sendUsersData(details);
  }



  return (
    <Form onSubmit={handleFormSubmit} className={classes.form}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="username" ref={usernameRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
      </Form.Group>

      {isSignUp && (
        <React.Fragment>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="file" name="filename" />
        {/* <Form.Control type="submit" /> */}
      </Form.Group>
        <Form.Group>
          <Form.Label>Describe Yourself</Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              type="textarea"
              as="textarea"
              placeholder="kjfdsa"
              ref={describeRef}
              style={{ height: "100px" }}
          
            />
          </FloatingLabel>
        </Form.Group>
        </React.Fragment>
      )}
      <div className={classes.btns}>

     { !isSignUp && <React.Fragment>
        <Button
          style={{ backgroundColor: "#00e4e3", border: "2px solid #00e4e3" }}
          type="submit"
          variant="primary"
        >
          Login
        </Button>
        <span style={{color: 'rgb(100, 150, 160)'}}>|</span>
        <Button
          style={{ backgroundColor: "#a060ff", border: "2px solid #a060ff" }}
          type="button"
          onClick={handleSignUp}
          variant="info"
        >
          SignUp
        </Button>
        </React.Fragment>}
        {isSignUp && <Button
          style={{ backgroundColor: "#a060ff", border: "2px solid #a060ff" }}
          type="button"
          onClick={handleSignUpData}
          variant="info"
        >
          SignUp
        </Button>}
      </div>
    </Form>
  );
}

export default BasicForm;
