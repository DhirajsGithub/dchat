import React, { useState } from 'react'
import { useDispatch, useSelector }  from 'react-redux';

const UsersData = () => {
  const [createUserData, setCreateUserData] = useState([]);
  const usersData = useSelector((state)=> state.users.users)

  let usersArray = []
  for(let key in usersData) {
    usersArray.push({
      id : key,
      username : usersData[key].username,
      password : usersData[key].password,
      describe : usersData[key].describe,
    })
  }
  setCreateUserData(usersArray);

  return (
    <div>UsersData</div>
  )
}

export default UsersData
 



                          