import React, { useState , useEffect} from 'react'

const Auth = (props) => {

    const [loading, setLoading] = useState(false);
    const [usersData, setUsersData] = useState([]);

    const userData = props.signUpDetails;
    // console.log(props.callFunc)

    async function addUsersData(){
        const response = await fetch("https://dchat-74b80-default-rtdb.firebaseio.com/usersData.json");
        const data = await response.json();
        
    }
    
    // props.addUsersData();



  return (
    <div>
        
    </div>
  )
}

export default Auth