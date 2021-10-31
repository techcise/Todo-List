import { FaTimesCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import db from './firebase';

const Items = ({ items }) => {
    return ( 
        <div className="items">
            {
                // Mapping over each item we get which is the object in the array of objects that will have an 'id' and 'item' property, that will look something like this --> [{id: 'this is my id', item:{ I am another object }}, {{id: 'this is my id', item:{ I am another object }}]

                items.map(item => (
                    <div className="list-items" key={item.id}>
                        <h2 className={item.item.done ? 'task-done' : 'task-title'}>{item.item.title}</h2> 
                        <FaTimesCircle onClick={() => db.collection('items').doc(item.id).delete()} id="removeIcon" />
                        <FaCheckCircle onClick={() => db.collection('items').doc(item.id).update({
                            done: !item.item.done
                        })
                        } id="doneIcon" />
                    </div>
                ))
            }
        </div>
    );
}
 
export default Items;