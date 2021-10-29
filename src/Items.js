import { FaTimesCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const Items = ({ items, onDelete, onDone }) => {
    return ( 
        <div className="items">
            {
                items.map((item) => (
                    <div className="list-items" key={item.id}>
                        <h2 className={item.done ? 'task-done' : 'task-title'}>{item.title}</h2> 
                        <FaTimesCircle onClick={() => onDelete(item.id)} id="removeIcon" />
                        <FaCheckCircle onClick={() => onDone(item.id)} id="doneIcon" />
                    </div>
                ))
            }
        </div>
    );
}
 
export default Items;