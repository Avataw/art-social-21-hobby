import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import logo from "./Logo.png";
import React from "react";

export function HobbyAppBar() {
    return <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <img src={logo} alt="Hobby app Logo"/>
            </IconButton>
            <Typography variant="h4">
                HOBBY
            </Typography>
        </Toolbar>
    </AppBar>;
}