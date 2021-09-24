import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ListWithProps = ({component}) => {
    return ( 
        <List >
        {component.map(({name, icon, clickFunc}) => (
          <ListItem button key={name} sx={{color: '#FFF'}} onClick={clickFunc}>
            <ListItemIcon sx={{color: '#FFF'}}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
     );
}
 
export default ListWithProps;