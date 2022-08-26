import React from 'react'
import { useSelector } from 'react-redux';
import classes from "./People.module.css";
import Person from './Person';

const People = () => {
  const users = useSelector((state)=>state.users.users)

  return (
    <div className={classes.people}>
        {users.map((user)=>{
          return(
            <Person profile={user.profile} username={user.username} />
          )
        })}
    </div>
  )
}

export default People