import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layouts/Header";
import BasicForm from "./Components/UI/BasicForm";
import { Fragment, useState } from "react";
import Auth from "./Components/Auth";

function App() {
  const [modalOverlay, setModalOverlay] = useState(true);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    username: '',
    password: '',
    describe: '',
    profile: null,
  });
  const handleModalOverlay = (signUpDetails) => {
    setModalOverlay(false);
    // console.log(signUpDetails)
    setDetails(signUpDetails);

  };


  async function addUsersData(details){
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
