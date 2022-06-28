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
  // const usersData = useSelector((state)=> state.users.users)
  // const dataFetched = useSelector((state)=>state.users.dataFetched);
  // console.log(dataFetched)
  // console.log(usersData);
  const [modalOverlay, setModalOverlay] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleModalOverlay = (signUpDetails) => {
    setModalOverlay(false);
    // console.log(signUpDetails)
    // setDetails(signUpDetails);

  };

  useEffect(() => {
    dispatch(fetchUsersData());
  
  }, [])
  


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

  return (
    <Fragment>
      <Header modalOverlay={modalOverlay} />
      {loading && <h1>Loading...</h1>}
      <BasicForm handleModalOverlay={handleModalOverlay} sendUsersData={addUsersData} />
      {/* <Auth signUpDetails={details}  /> */}
    </Fragment>
  );
}

export default App;
