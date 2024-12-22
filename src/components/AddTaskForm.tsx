import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";


const AddTaskForm: React.FC = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(addTask({ title, description }));
      setTitle('');
      setDescription('');
   };

   return (
      <div>
         <input
            type="text"
            value={title}
            onChange={handleTitleChange}
         />
         <button onClick={handleAddClick}>Add</button>
      </div>
   );
}

export default AddTaskForm;