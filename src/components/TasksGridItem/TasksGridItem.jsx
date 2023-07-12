import TaskBox from '../TaskBox/TaskBox';
import './TasksGridItem.css'


function TasksGridItem({ name, tasks, type,setTasks }) {
    return (
        <div className="tasks__grid__item">
            <div className='tasks__header'>
                {name}
            </div>

            <div
                style={{ 
                    marginTop: '6px',
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                {tasks.map(task => {
                  return(
                      task.type === type && <TaskBox
                      key={task.id}
                      id={task.id}
                      value={task.value}
                      setTasks={setTasks}

                      ></TaskBox>
                  )
                })}
            </div>
        </div>
    )
}

export default TasksGridItem;