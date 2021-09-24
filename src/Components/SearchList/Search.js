import React from 'react';

const Search = ({list}) => {
    return ( 
        <div>
            {list.map(item => {
                return <p>{item}</p>;
            })}
        </div>
     );
}
 
export default Search;