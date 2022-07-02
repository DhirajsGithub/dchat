import React from "react";

const Message = (props) => {
  console.log(props.time)
  return (
    <li>
      <div className="row comments mb-2">
        <div className="col-md-2 col-sm-2 col-3 text-center user-img">
          <img
            id="profile-photo"
            src="http://nicesnippets.com/demo/man01.png"
            className="rounded-circle"
          />
        </div>
        <div className="col-md-9 col-sm-9 col-9 comment rounded mb-2">
          <h4 className="m-0">
            <a href="#">{props.username}</a>
          </h4>
          <time className="text-white ml-3">{props.time}</time>
         
          <p className="mb-0 text-white message">
            {props.message}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Message;
