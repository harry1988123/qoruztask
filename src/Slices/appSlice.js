import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "app",
  initialState: {
    todoList: [
      {
        id: 1,
        name: "Task 1",
        Date: "01/01/2021",
        status: "Completed",
      },
      {
        id: 2,
        name: "Task 2",
        Date: "02/04/2021",
        status: "Pending",
      },
      {
        id: 3,
        name: "Task 3",
        Date: "03/05/2021",
        status: "Pending",
      },
      {
        id: 4,
        name: "Task 4",
        Date: "03/09/2021",
        status: "Completed",
      },
    ],
    completedTodo: [],
    pendingTodo: [],
  },
  reducers: {
    setAddTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    setCompletedTodo: (state, action) => {
      state.completedTodo = [
        ...state.todoList.filter((d) => d["status"] === "Completed"),
      ];
    },
    setPendingTodo: (state, action) => {
      state.pendingTodo = [
        ...state.todoList.filter((d) => d["status"] === "Pending"),
      ];
    },
    setRemoveTodo: (state, action) => { 
        const newState = state;
        newState.todoList = [
        ...newState.todoList
          .map((d) => d["id"] === action.payload["id"] ?  (d["status"] = 'Completed'): {...d})
      ];
    },
  },
});

export const { setAddTodo, setRemoveTodo, setCompletedTodo, setPendingTodo } =
  slice.actions;

export const SelectedtodoList = (state) => state.todoList;

export const SelectedCompletedTodoList = (state) => state.completedTodo;
export const SelectedPendingTodoList = (state) => state.pendingTodo;

export default slice.reducer;
