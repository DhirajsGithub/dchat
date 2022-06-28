import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users : [{'name': 'shit'}],
    isUsernamePresent : false,
    dataFetched : false,

}

const userSlice = createSlice({
    name: 'userSlice',
    initialState : initialState,
    reducers : {
        getUsers(state, actions){
            state.users = actions.payload.users;
            state.isUsernamePresent = actions.payload.isUsernamePresent;
            state.dataFetched = actions.payload.dataFetched;
        }
    }
})

export const usersActions = userSlice.actions;
export default userSlice;