import React from 'react';

function List({layout, items}) {
    if(layout==='numbered') {
        return (
            <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
        );
    }
    else if(layout==='bullet') {
        return (
            <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        );
    }
    else if(layout === 'alpha') {
        return (
            <ol type="a">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ol>
        )
    }
}
export default List;
