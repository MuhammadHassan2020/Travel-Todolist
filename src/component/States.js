export const States = ({ items }) => {
    if (!items.length)
        return (<p className='states'>
            <em className='states-text'>
                Start adding you Items to you packing list 🚀
            </em>
        </p>
        );

    const newItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / newItems) * 100);
    return <footer className='states'>
        <em className='states-text'>
            {percentage === 100 ? "You got everything ready to go ✈️" : ` you have ${newItems} items on your List, and already pack ${numPacked}(${percentage}%)`}

        </em>
    </footer>;
};
