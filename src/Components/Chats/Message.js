import React from "react";
import { useSelector } from "react-redux";

const Message = (props) => {
  const user = useSelector((state) => state.users.user[0]);
  const itMe = () => {
    return user.username === props.username;
  };
  console.log(props.time[0]);
  const profileImg = (
    <div className="col-md-2 col-sm-2 col-3 text-center user-img">
      {" "}
      <img
        id="profile-photo"
        src="http://nicesnippets.com/demo/man01.png"
        className="rounded-circle"
      />{" "}
    </div>
  );
  return (
    <li >
      <div style={{display:'flex', justifyContent:user.username === props.username ?'flex-end':''}} className="comments mb-2">
        {!(user.username === props.username) && profileImg}

        <div
          style={{
            background:
              user.username === props.username ? "#00AF90" : "#A060FF",
          }}
          className="col-md-9 col-sm-9 col-9 comment mb-2"
        >
        <p className="mb-0 text-white message">{props.message}</p>
        <div style={{textAlign: user.username === props.username ? 'end':''}}>
          <h4 className="m-0">
            <a href="#">{props.username}</a>
          </h4>
          <time className="text-white ml-3">
            {props.time[0]}
          </time>
          </div>
        </div>
        {(user.username === props.username) && profileImg}
      </div>
    </li>
  );
};

export default Message;
