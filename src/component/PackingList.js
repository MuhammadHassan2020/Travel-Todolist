import { useState } from 'react';
import { Item } from './Item';

// Packing list starts from here 
export const PackingList = ({ items, onDeleteItems, onToggleItems, onClearList }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className='list'>
            <div className='underlist'>
                <ul>
                    {sortedItems?.map((item) => (
                        <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
                    ))}
                </ul>
            </div>
            <div className='ForSorted'>
                <select className='actions' value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Sort by input</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button className='button' onClick={onClearList}>Clear</button>
            </div>
        </div>
    );
};
