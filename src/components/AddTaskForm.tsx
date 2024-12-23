import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAdded } from "../features/tasks/tasksSlice";


const AddTaskForm: React.FC = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(taskAdded({
         title, description,
         id: "",
         completed: false
      }));
      setTitle('');
      setDescription('');
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button type="submit">Add Task</button>
      </form>
   );
};

export default AddTaskForm;