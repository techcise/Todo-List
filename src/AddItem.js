import { useState } from "react";


const AddItem = ({ items, setItems }) => {
    let [text, setText] = useState('');
    let value = {title: `${text}`, done: false};
    async function addItem(e){
        e.preventDefault();
        let res = await fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(value)
        });
        let data = await res.json();
        setItems([...items ,data]);
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