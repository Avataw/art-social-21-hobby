import React from 'react';
import {HobbyAppBar} from "./HobbyAppBar";
import {Box, createStyles, Grid, Input, LinearProgress, makeStyles, Theme, Typography} from "@material-ui/core";
import searching from "./undraw/undraw_searching.svg"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {StartQuizButton} from "./StartQuizButton";
import location from "./undraw/undraw_my_location.svg"
import {NextQuestionButton} from "./NextQuestionButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: 'hidden',
        },
        media: {
            width: '100%',
        },
        quizImage: {
            marginTop: "-20px",
            width: '35%',
        },
        quizPanel: {
            marginTop: "20px",
            height: '50vh',
            border: '3px solid',
        },
        quizProgress: {
            height: '15px',
            border: '3px solid',
        },
        quizInput: {
            border: '3px solid',
            fontSize: "30px"
        },
        quizGrid: {
            paddingTop: "20px",
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
                    <Route path="/secondQuizPage">
                        <Grid container
                              alignItems="center"
                              justify="center"
                              spacing={2}>
                            <Grid item xs={10}>
                                <Typography variant={"h3"}>
                                    Question 1/3:
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <LinearProgress variant="determinate" value={33} color={"secondary"}
                                                className={classes.quizProgress}/>
                            </Grid>
                            <Grid item xs={10}>
                                <Box className={classes.quizPanel}>

                                    <img src={location} className={classes.quizImage} alt={"mobile phone with location"}/>

                                    <Grid className={classes.quizGrid} container alignItems={"center"} justify="center"
                                          spacing={5}>

                                        <Grid item xs={10}>
                                            <Typography variant={"h4"} align={"center"}>
                                                Where are you?
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography variant={"h4"}>
                                                PLZ:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Input id="outlined-basic"
                                                   className={classes.quizInput}/>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item>
                                <NextQuestionButton nextUrl={"/secondQuizPage"}/>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/quiz">
                        <Grid container
                              alignItems="center"
                              justify="center"
                              spacing={2}>
                            <Grid item xs={10}>
                                <Typography variant={"h3"}>
                                    Question 1/3:
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <LinearProgress variant="determinate" value={33} color={"secondary"}
                                                className={classes.quizProgress}/>
                            </Grid>
                            <Grid item xs={10}>
                                <Box className={classes.quizPanel}>

                                    <img src={location} className={classes.quizImage} alt={"mobile phone with location"}/>

                                    <Grid className={classes.quizGrid} container alignItems={"center"} justify="center"
                                          spacing={5}>

                                        <Grid item xs={10}>
                                            <Typography variant={"h4"} align={"center"}>
                                                Where are you?
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography variant={"h4"}>
                                                PLZ:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Input id="outlined-basic"
                                                   className={classes.quizInput}/>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item>
                                <NextQuestionButton nextUrl={"/secondQuizPage"}/>
                            </Grid>
                        </Grid>
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
