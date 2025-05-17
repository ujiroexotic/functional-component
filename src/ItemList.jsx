import React from 'react';

function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item">
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;

