import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import spotify_logo from '../../Assets/spotify-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ListIcons from '../Lists/AddList';
import AddList from '../AddList';
import './Drawer.css';
import ListMusics from '../Lists/ListMusics';
import SearchList from '../SearchList';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [canShow, setCanShow] = useState();

  const [list, setList] = useState([]);

  const verifyShow = () => {
    setCanShow(true);
  }
  
  const listComponents = [{ name: "Início", icon: <HomeIcon />, component: ''},
      { name: "Procurar", icon: <SearchIcon />, component: <SearchList list={list}/>},
      { name: "A Tua Biblioteca", icon: <LibraryMusicIcon />, component: ''},
      { name: "Criar Lista", icon: <LibraryAddIcon />, component: <AddList list={list} setList={setList}/>, canShow: canShow, clickFunc: verifyShow}
    ];

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor: '#000' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Spotify
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {  
            width: drawerWidth,
            borderRight: '0px',
            boxSizing: 'border-box',
            backgroundColor: '#000000'  
        },
          
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ backgroundColor: '#000000' }}>
            <img src={spotify_logo} alt="logo" className="spotify-logo"/>
        </Toolbar>
        <Divider />

        <ListIcons component={listComponents}/>
        
        <Divider sx={{width: '95%', height: '0', backgroundColor: '#fff', margin: '5px'}} />
        <Typography sx={{ color: '#FFF'}}>Suas Playlists</Typography>
        <ListMusics list={list} />
        
        {/* <ListIcons title={['All mail', 'Trash', 'Spam']} icons={[<HomeIcon />, <SearchIcon />, <SearchIcon />]} />
           */}
      </Drawer>
      <Box
        component="main"
        sx={{p: '15px'}}
      >
        <Toolbar />
           {listComponents.map((component) => {
             if (component.canShow) {
               return component.component;
             }
           })}
      </Box>
    </Box>
  );
}
