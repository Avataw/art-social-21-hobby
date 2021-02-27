import React from 'react';
import {HobbyAppBar} from "./HobbyAppBar";
import {Box, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import searching from "./undraw/undraw_searching.svg"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {StartQuizButton} from "./StartQuizButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: 'hidden',
        },
        media: {
            width: '100%',
        },
        panel: {
            height: '35vh',
            borderRadius: '10%',
            transform: 'rotate(10deg)',
            backgroundColor: theme.palette.secondary.main
        },
        panelText: {
            paddingTop: "5%",
            transform: 'rotate(-10deg)',
            color: theme.palette.secondary.contrastText
        },
        button: {
            border: '3px solid',
            transform: 'rotate(5deg)',
        },
        buttonText: {
            color: theme.palette.primary.contrastText
        },
        buttonPanel: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '10%',
            transform: 'rotate(-5deg)',
        }
    }),
);

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>

                <HobbyAppBar/>
                <Switch>
                    <Route path="/quiz">
                        test
                    </Route>
                    <Route path="/">
                        <Grid container
                              alignItems="center"
                              justify="center">
                            <Grid item xs={11}>
                                <img src={searching} className={classes.media} alt={"someone searching"}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className={classes.panel}>
                                    <Grid container
                                          alignItems="center"
                                          justify="center"
                                          spacing={1}>
                                        <Grid item xs={11}>
                                            <Typography variant={"h4"} className={classes.panelText}>
                                                Looking for a hobby?
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant={"h5"} className={classes.panelText}>
                                                Answer the questions below to help us find your
                                                new and exciting passion!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item>
                                <StartQuizButton/>
                            </Grid>
                        </Grid>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
