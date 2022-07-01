import React, { useState, useEffect } from "react";
import Message from "./Message";
import { useSelector, useDispatch } from "react-redux";
import { sendChatsData } from "../store/chat-actions";
import { fetchChatsData } from "../store/chat-actions";

// npm install socket.io-client
import { io, Socket } from "socket.io-client";
const socket = io.connect("http://localhost:5500");

const Chat = () => {
  const sStatus = useSelector((state)=> state.chats.notification.send);
  console.log(sStatus)
  const userData = useSelector((state)=> state.chats.chats);
  console.log("user Data is", userData);
  const dispatch = useDispatch();
  const[msg, setMsg] = useState('');
  const [chatArray, setChatArray] = useState([]);

  const handleOnChange = (event)=>{
    setMsg(event.target.value);
  }

  const handleOnSubmit = (event)=>{
    event.preventDefault();
    dispatch(sendChatsData({
      message : msg,
      username: 'dhiraj'
    }))
    // passing payload can be anything img to files to text
    socket.emit("dchat", {message:msg, username: 'dhiraj'});
    setMsg('');
  }
  useEffect(()=>{
    dispatch(fetchChatsData());
    socket.on("dchat", (payload)=>{
      setChatArray([...chatArray, payload]);
    }, [])
  });
  console.log(chatArray);

  let data = new Date();
  console.log(data.getSeconds());

  return (
    <div className="container chat-main">
      <div className="row mt-5">
        {/* <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded"> */}
        <div className="comments-main pt-4 rounded">
        <div className="chat-messages">

       
          <ul className="p-0">
            <Message username="dhiraj" time="1 hour ago" message="very first message lorem wkfjskdl jfk klsdjf ssakdfj ksdjfk jsadkfj" />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </ul>
          </div>
          <hr />
          <div className="input-send comment-box-main p-3 mt-3 rounded mb-3">
          <form onSubmit={handleOnSubmit} action="">
            <div className="col-md-9 col-sm-9 col-9 pr-0 mr-3 comment-box">
              <input
                type="text"
                className="form-control"
                placeholder="message ...."
                value={msg}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-md-3 col-sm-2 col-2 pl-0 text-center send-btn">
              <button type="submit" className="btn btn-info">Send <i className="fa-solid fa-paper-plane"></i></button>
            </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Chat;
