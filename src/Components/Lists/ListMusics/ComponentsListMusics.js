import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ComponentListMusics = ({list}) => {
    return ( 
        <List >
        {list.map(({name, counter}) => (
          <ListItem button key={name} sx={{color: '#FFF'}}>
            <ListItemIcon sx={{color: '#FFF'}}>
              {counter}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
     );
}
 
export default ComponentListMusics;