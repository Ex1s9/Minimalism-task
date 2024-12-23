import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
   id: string;
   title: string;
   description: string;
   completed: boolean;
}

interface TasksState {
   tasks: Task[];
}

const initialState: TasksState = {
   tasks: [],
};

const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {
      taskAdded(state, action: PayloadAction<Task>) {
         state.tasks.push(action.payload);
      },
      taskToggled(state, action: PayloadAction<string>) {
         const task = state.tasks.find((task) => task.id === action.payload);
         if (task) {
            task.completed = !task.completed;
         }
      },
      deleteTask(state, action: PayloadAction<string>) {
         state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
      updateTask(state, action: PayloadAction<Task>) {
         const task = state.tasks.find((task) => task.id === action.payload.id);
         if (task) {
            task.title = action.payload.title;
            task.description = action.payload.description;
         }
      }
   },
});

export const { taskAdded, taskToggled, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;