import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import './TextField.css';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const ComponentAddList = ({list, setList}) => {

    const [myList, setMyList] = useState([]);
    let [counter, setCounter] = useState(0);
    const [name, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    console.log(myList);
    console.log(name);

    const addListItem = () => {
        setMyList([
            ...myList,
            name
        ]);
        setCounter(counter += 1);
        setList([
            ...list,
            {name: name, counter: counter}
        ])
        
    }
    console.log(list);
    return ( 
        <div>
            <TextField 
            id="outlined-basic" 
            label="Digite o nome da sua lista!" 
            variant="outlined" 
            className="text-field-add"
            value={name}
            onChange={handleChange}
            />   
            <button 
            className="bt-add"
            onClick={addListItem}>
                <LibraryAddIcon />
            </button>
        </div>
     );
}
 
export default ComponentAddList;