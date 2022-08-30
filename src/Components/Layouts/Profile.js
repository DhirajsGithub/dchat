import React from "react";

import classes from "./Profile.module.css";

const localUser = localStorage.getItem("loggedInUser")
const storedUser = JSON.parse(localUser);

const Profile = (props) => {
  const describe = props.userLogin.describe.length <600 ? props.userLogin.describe : props.userLogin.describe.slice(0, 600)
  // console.log(props.profile)

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className={`${classes.card} p-3 py-4`}>
            <div className="text-center">
              <img
                src={props.userLogin.profile}
                width="100"
                height="100"
                className="rounded-circle"
              />
            </div>

            <div className="text-center mt-3">
              {storedUser ? (
                <form
                  style={{
                    textAlign: "center",
                    fontSize: "1.3rem",
                  }}
                  action=""
                >
                </form> 
              ) : ""}
              <h1 className="mt-4 mb-0">{props.userLogin.username}</h1>

              <div className={classes.overFlowShit}>
                <span>{describe} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
