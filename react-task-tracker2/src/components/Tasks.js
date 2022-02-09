// import PropTypes from 'prop-types'

// const  tasks = [
//     {
//       "id": 1,
//       "text": "Doctors Appointment",
//       "day": "Feb 5th at 2:30pm",
//       "reminder": true
//     },
//     {
//       "id": 2,
//       "text": "Meeting at School",
//       "day": "Feb 6th at 1:30pm",
//       "reminder": true
//     }
//   ]
import Task from "./Task"

const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
      <>
         {tasks.map((task,index)=> (
           <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} ></Task>
           ))} 
        
      </>
  )

  }
// Task.propTypes = {

// }
export default Tasks
