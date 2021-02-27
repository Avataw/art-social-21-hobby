import React from 'react';
import {HobbyAppBar} from "./HobbyAppBar";
import {Box, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import searching from "./undraw/undraw_searching.svg"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {StartQuizButton} from "./StartQuizButton";
import QuizPage from "./QuizPage";
import InputQuizPage from "./InputQuizPage";
import building from "./undraw/undraw_building_blocks.svg"
import outdoor from "./undraw/undraw_fitness_tracker.svg"
import welldone from "./undraw/undraw_well_done.svg"
import {Result} from "./Result";
import bees from "./bees.jpeg";
import {CallUsButton} from "./CallUsButton";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        result: {
            margin: "20px"
        }
    }),
);

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div>
                <HobbyAppBar/>
                <Switch>
                    <Route path="/result">
                        <Grid container
                              alignItems="center"
                              justify="center">
                            <Grid item xs={11}>
                                <img src={bees} className={classes.media} alt={"someone searching"}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className={classes.panel}>
                                    <Grid container
                                          alignItems="center"
                                          justify="center"
                                          spacing={1}>
                                        <Grid item xs={11}>
                                            <Typography variant={"h4"} className={classes.panelText}>
                                                BUND Bienen Verein
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant={"h5"} className={classes.panelText}>
                                               Wir beschäftigen uns in unserer Freizeit mit Bienen und
                                                freuen uns über jede Kontaktaufnahme!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item>
                                <CallUsButton/>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/hobbies">
                        <Grid container
                              alignItems="center"
                              justify="center">
                            <Grid item>
                                <Typography variant={"h4"} align={"center"}>
                                    Wie wäre es denn hiermit?
                                </Typography>
                            </Grid>
                            <Grid item xs={10} className={classes.result}>
                                <Result title={"Bund!"}
                                        description={"Wir kümmern uns um Bienen und sind..."}
                                        image={bees}/>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/success">
                        <QuizPage question={"Super!"}
                                  description={"Wir suchen gerade nach passenden Hobbies für dich..."}
                                  imageLocation={welldone} progress={3}
                                  nextPage={"/hobbies"}
                        final={true}/>
                    </Route>
                    <Route path="/thirdQuizPage">
                        <QuizPage question={"Willst du raus?"}
                                  description={"Bist du sehr gerne im freien und atmest frische Luft?"}
                                  imageLocation={outdoor} progress={2}
                                  nextPage={"/success"}/>
                    </Route>
                    <Route path="/secondQuizPage">
                        <QuizPage question={"Zwei rechte Hände?"}
                                  description={"Magst du es Dinge mit deinen Händen zu berühren oder zu bauen?"}
                                  imageLocation={building} progress={1}
                                  nextPage={"/thirdQuizPage"}/>
                    </Route>
                    <Route path="/quiz">
                        <InputQuizPage/>
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
                                                Suchst du <b>dein</b> hobby?
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant={"h5"} className={classes.panelText}>
                                              Wir helfen dir! Antworte einfach auf die Fragen in unserem Quiz!
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
