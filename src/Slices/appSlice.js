import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'app',
    initialState:{
        taskList:[{
            "name":'Task 1',
            "Date": '01-Feb-2021',
            "status": 'Completed'
        },{
            "name": 'Task 2',
            "Date": '02-Apr-2021',
            "status": 'Active'
        }]
    },
    reducers:{
        setAddTodo : (state, action) =>{
            state.taskList = [state.taskList, ...action];
        },
        setRemoveTodo : (state, action) => {
            state.taskList = state.taskList.filter((d) => d["name"] != action["name"])
        }
    } 
});

export const { setAddTodo, setRemoveTodo } = slice.actions;

export const taskList = state => state.app.taskList;

export default slice.reducer;