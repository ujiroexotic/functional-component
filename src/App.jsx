import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch items');
        return res.json();
      })
      .then((data) => {
        setItems(data.slice(0, 10)); // Show only first 10 items
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Post List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ItemList items={items} />}
    </div>
  );
}

export default App;
