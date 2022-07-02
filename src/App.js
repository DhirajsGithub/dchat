import "./App.css";
import Header from "./Components/Layouts/Header";
import BasicForm from "./Components/UI/BasicForm";
import { Fragment, useState, useEffect } from "react";
import { fetchUsersData } from "./Components/store/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Components/Chats/Chat";
import Profile from "./Components/Layouts/Profile";
import People from "./Components/Layouts/People";

function App() {
  const dispatch = useDispatch();
  const isUserNamePresent = useSelector(
    (state) => state.users.isUsernamePresent
  );
  const isPasswordMatched = useSelector(
    (state) => state.users.isPasswordMatched
  );
  const userLogin = useSelector((state) => state.users.user);
  console.log(userLogin);
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState(false);
  const [home, setHome] = useState(true);
  const [people, setPeople] = useState(false);

  const handleNavItems = (res) => {
    console.log('nav item is ', res)
    if (res === "home") {
      setHome(true);
      setProfile(false);
      setPeople(false);
    }else if(res === "profile"){
      setHome(false);
      setProfile(true);
      setPeople(false);
    }else {
      setHome(false);
      setProfile(false);
      setPeople(true);
    }
  };
  console.log("home is ", home)

  useEffect(() => {
    console.log("users fetched");
    dispatch(fetchUsersData());
  }, [dispatch, loading]);

  async function addUsersData(details) {
    console.log("addUserData");
    setLoading(true);
    const response = await fetch(
      "https://dchat-74b80-default-rtdb.firebaseio.com/usersData.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setLoading(false);
  }

  const basicForm = (
    <BasicForm sendUsersData={addUsersData} loading={loading} />
  );

  return (
    <Fragment>
      <Header handleNavItems={handleNavItems} />
      {loading && <h1>Loading...</h1>}
      {!isUserNamePresent && !isPasswordMatched && basicForm}
      { isUserNamePresent && isPasswordMatched && profile && <Profile userLogin={userLogin} />}
      {isUserNamePresent && isPasswordMatched && people && <People />}
      {isUserNamePresent && isPasswordMatched && home && <Chat userLogin={userLogin} />}
    </Fragment>
  );
}

export default App;
