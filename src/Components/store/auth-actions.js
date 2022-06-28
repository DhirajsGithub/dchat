import { usersActions } from "./auth-slice";

export const fetchUsersData = ()=>{
    let dataFetching = false;
    return async(dispatch)=>{
        const fetchUsers = async ()=>{
            const response = await fetch("https://dchat-74b80-default-rtdb.firebaseio.com/usersData.json")

            if (!response.ok) {
                throw new Error('Could not fetch users data!');
              }
        
              const data = await response.json();
            //   console.log(data)
              dataFetching = true;
              return data;
        }

        try {
            const usersData = await fetchUsers();
            let usersArray = []
            for(let key in usersData) {
              usersArray.push({
                id : key,
                username : usersData[key].username,
                password : usersData[key].password,
                describe : usersData[key].describe,
              })
            }
            dispatch(
                usersActions.getUsers({
                    users : usersArray || [],
                    isUsernamePresent : false,
                    dataFetched : dataFetching,
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}