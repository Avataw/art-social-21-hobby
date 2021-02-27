import React from 'react';
import logo from './Logo.png';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";

function App() {
  return (
    <div>
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={logo} alt="Hobby app Logo"/>
                </IconButton>
                <Typography variant="h4">
                    HOBBY
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default App;
