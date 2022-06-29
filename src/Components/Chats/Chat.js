import React from "react";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="container chat-main">
      <div className="row mt-5">
        {/* <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded"> */}
        <div className="comments-main pt-4 rounded">
          <ul className="p-0">
            <Message />
            <Message />
            <Message />
            <Message />
          </ul>
          <div className="input-send comment-box-main p-3 rounded-bottom">
            <div className="col-md-9 col-sm-9 col-9 pr-0 comment-box">
              <input
                type="text"
                className="form-control"
                placeholder="message ...."
              />
            </div>
            <div className="col-md-3 col-sm-2 col-2 pl-0 text-center send-btn">
              <button className="btn btn-info">Send</button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Chat;
