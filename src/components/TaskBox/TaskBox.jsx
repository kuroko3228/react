import './TaskBox.css'
import { HiArrowSmRight } from 'react-icons/hi'
import {BsFillTrash3Fill} from 'react-icons/bs'

function TaskBox({ value, id,setTasks }) {
    const onDelete=(e)=>{
        setTasks(currVal =>{
            return currVal.filter(task=> task.id !== id)
        })
    }
    return (
        
        <div className="task__box"> 
            <div>
                {value}
            </div>
            <button className='input__button'>
                <HiArrowSmRight />
            </button>
            <button className='trash__input' onClick={onDelete}>
            <BsFillTrash3Fill/>
            </button>
        </div>
    )
}

export default TaskBox;