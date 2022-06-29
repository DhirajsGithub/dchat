import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layouts/Header";
import BasicForm from "./Components/UI/BasicForm";
import { Fragment, useState, useEffect } from "react";
import Auth from "./Components/Auth";
import { fetchUsersData } from "./Components/store/auth-actions";
import { useDispatch, useSelector }  from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isUserNamePresent = useSelector((state)=> state.users.isUsernamePresent)
  const isPasswordMatched = useSelector((state)=> state.users.isPasswordMatched)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log("users fetched")
    dispatch(fetchUsersData());
  }, [dispatch, loading])
  


  async function addUsersData(details){
    console.log("addUserData")
    setLoading(true);
    const response = await fetch("https://dchat-74b80-default-rtdb.firebaseio.com/usersData.json", {
        method : 'POST', 
        body : JSON.stringify(details),
        headers : {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    setLoading(false);
    
}

const basicForm  = (<BasicForm sendUsersData={addUsersData} loading={loading} />)


  return (
    <Fragment>
      <Header />
      {loading && <h1>Loading...</h1>}
      {/* <Auth signUpDetails={details}  /> */}
      {!isUserNamePresent && !isPasswordMatched && basicForm}
    </Fragment>
  );
}

export default App;
