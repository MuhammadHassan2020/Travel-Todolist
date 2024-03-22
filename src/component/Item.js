

export const Item = ({ item, onDeleteItems, onToggleItems }) => {
    return <li className='items'>
        <input type='checkbox' value={item.packed} onChange={() => { onToggleItems(item.id); }} />
        <span style={item.packed ? { textDecoration: "line-through", color: "grey" } : {}}>
            {item.quantity}{""} {item.description}

            <button onClick={() => { onDeleteItems(item.id); }}>❌</button>
        </span>
    </li>;
};
