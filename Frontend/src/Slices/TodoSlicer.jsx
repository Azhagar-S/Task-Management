import {createSlice} from "@reduxjs/toolkit"

const intialState = {
    todo:[],
}

export const todoSlice = createSlice({
    name:"todo",
    intialState,

    reducers:{
        // todoName:(state,action)=>{
        //     state.todo = [{...state.todo , todoName:action.payload}]
        // }
        addTask:(state,action)=>{
            state.todo.push({ id: Date.now(), ...action.payload})
        },
        deleteTask:(state,action)=>{
            state.todo = state.todo.filter(data => data.id !=action.payload)
        }
    }
})

export const {addTask , deleteTask} = todoSlice.actions
export default todoSlice.reducer