import {createSlice} from "@reduxjs/toolkit"

const intiialState = {
    todo:[]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,

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

export const {addTask , deleteTask} = todoSlice
export default todoSlice.reducer