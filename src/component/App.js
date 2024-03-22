import { useState } from 'react';
import './App.css';
import { Logo } from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { States } from './States';

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => ([...items, { ...item }]))
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItems(id) {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed }
        : item))
  }
  function handleClearList() {
    setItems([]);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItems} onClearList={handleClearList} />
      <States items={items} />
    </div>
  );
}



