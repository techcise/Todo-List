import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import Items from './Items';
import db from './firebase';

function App() {
  let [items, setItems] = useState(null);

  // fetching data from firebase firestore using the useEffect Hook

  useEffect(() => {
    let getData = () => {
      db.collection('items').orderBy("timestamp", "desc").onSnapshot(snapshot => {
        setItems(snapshot.docs.map(doc => ({id: doc.id, item: doc.data()})));
      });
    }
    // This will run only once when the app loads
    getData();
  }, []);


  return (
    <div className="App">
      {items && <AddItem items={items} setItems={setItems} />} 
      {items && <Items items={items} />}
    </div>
  );
}

export default App;