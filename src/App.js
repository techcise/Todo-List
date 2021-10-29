import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import Items from './Items';

function App() {
  let [items, setItems] = useState(null);
  // let [done, setDone] = useState(false);
  useEffect(() => {
    let getData = async () => {
      let res = await fetch('http://localhost:5000/items');
      let data = await res.json();
      setItems(data);
    }
    getData();
  }, []);
  async function deleteItem(id){
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE'
    })
    setItems(items.filter((item) => item.id !== id));
  }
  async function getTask(id){
    let res = await fetch(`http://localhost:5000/items/${id}`);
    let data = await res.json();
    return data;
  }
  async function markDone(id){
    let res = await getTask(id);
    let data1 = await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'     
      },     
      body: JSON.stringify({...res, done: !res.done})     
    })
    let data = await data1.json();
    setItems(
      items.map((task) =>
        task.id === id ? { ...task, done: data.done } : task
      )
    )
  }
  return (
    <div className="App">
      {items && <AddItem items={items} setItems={setItems} />}
      {items && <Items items={items} onDelete={deleteItem} onDone={markDone}/>}
    </div>
  );
}

export default App;