import React, { useEffect, useState } from "react";

import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersActions } from "../store/auth-slice";
import { storage } from "../storage/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { UpdateUserData } from "../store/auth-actions"

const localUser = localStorage.getItem("loggedInUser")
const storedUser = JSON.parse(localUser);

const Profile = (props) => {
  // const userCollectionRef = collection(Firebasedatabase, "usersData");
  // useEffect(()=>{
  //   const getUser = async ()=>{
  //     const data = await getDocs(userCollectionRef);
  //     console.log("firebase data")
  //     console.log(data)
  //   }
  //   getUser();
  // },[])

  // const isUserLoggedIn = useSelector(
  //   (state) => state.users.user
  // );

  const [imageUrl, setImageUrl] = useState("");
  const changeProfilePic = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const imageRef = ref(storage, `/files/${file.name}`);
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setImageUrl(url);
            UpdateUserData(props.userLogin.id, "profile_is_update")
          })
          .catch((err) => {
            console.log(err.message, "error");
          });
        setImageUrl(null);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(imageUrl);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className={`${classes.card} p-3 py-4`}>
            <div className="text-center">
              <img
                src={imageUrl ? imageUrl : "https://i.imgur.com/bDLhJiP.jpg"}
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
                  <input
                    onChange={storedUser ? changeProfilePic : ""}
                    id="files"
                    style={{ textAlign: "center" }}
                    title="f"
                    type="file"
                  />
                </form> 
              ) : (
                <span>Profile</span>
              )}
              <h1 className="mt-2 mb-0">{props.userLogin.username}</h1>

              <div className="px-4 mt-1">
                <p className={`classes.fonts`}>{props.userLogin.username} </p>
              </div>

              <ul className={classes["social-list"]}>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-dribbble"></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-linkedin"></i>
                </li>
                <li>
                  <i className="fa fa-google"></i>
                </li>
              </ul>

              <div className={classes.buttons}>
                <button className="btn btn-outline-primary px-4">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
