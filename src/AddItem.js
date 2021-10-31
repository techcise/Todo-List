import { useState } from "react";
import db from './firebase';
import firebase from 'firebase'

const AddItem = () => {
    let [text, setText] = useState('');
    function addItem(e){
        e.preventDefault();
        db.collection("items").add({
            title: text,
            done: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setText('');
    }
    return ( 
        <form className="addItem">
            <label id="task-label">Task</label>
            <input id="task-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            {text !== '' && <button type="submit" id="addBtn" onClick={addItem}>Add</button>}
            {text === '' && <button disabled id="addBtn-disable">Add</button>}
        </form>
    );
}

export default AddItem;