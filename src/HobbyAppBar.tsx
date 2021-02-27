import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import logo from "./Logo.png";
import React from "react";
import {Link} from "react-router-dom";

export function HobbyAppBar() {
    return <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
            <Link to={"/"}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={logo} alt="Hobby app Logo"/>
                </IconButton>
            </Link>
            <Typography variant="h4">
                HOBBY
            </Typography>
        </Toolbar>
    </AppBar>;
}