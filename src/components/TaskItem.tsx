import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, taskToggled } from '../features/tasks/tasksSlice';
import { Task } from '../features/tasks/tasksTypes';

interface TaskItemProps {
   task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
   const dispatch = useDispatch();

   const handleCheckboxChange = () => {
      dispatch(taskToggled(task.id));
   };

   const handleDeleteClick = () => {
      dispatch(deleteTask(task.id));
   };

   return (
      <div>
         <input
            type="checkbox"
            checked={task.completed}
            onChange={handleCheckboxChange}
         />
         <span>{task.title}</span>
         <button onClick={handleDeleteClick}>Delete</button>
      </div>
   );
};

export default TaskItem;