import { useState } from 'react';

export const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, packed: false, id: Date.now() };
        onAddItems(newItem);
        // console.log(newItem); 
        setDescription("");
        setQuantity(1);

    };
    return (
        // Form starts from here
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😃 trip?</h3>
            <select className='select-field'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((num) => (<option value={num} key={num}>{num}</option>
                    ))}
            </select>
            <input className='input-field'
                value={description}
                onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Item..." />
            <button className='button'>Add</button>
        </form>
    );
};
