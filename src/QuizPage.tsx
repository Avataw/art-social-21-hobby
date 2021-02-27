import React, {useEffect} from 'react';
import {Box, createStyles, Grid, LinearProgress, makeStyles, Theme, Typography} from "@material-ui/core";
import {YesButton} from "./YesButton";
import {NoButton} from "./NoButton";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        quizImage: {
            marginTop: "-20px",
            width: '35%',
        },
        quizPanel: {
            marginTop: "20px",
            paddingBottom: "20px",
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
    }),
);

interface QuizPageProps {
    question: string,
    description?: string,
    imageLocation: string,
    progress: number,
    nextPage: string,
    final?: boolean
}

function QuizPage({question, description, imageLocation, progress, nextPage, final}: QuizPageProps) {

    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        setTimeout(function () {
            if (final === true) {
                history.push("/hobbies")
            }
        }, 3000);
    }, [final, history]);


    return <Grid container
                 alignItems="center"
                 justify="center"
                 spacing={2}>
        <Grid item xs={10}>
            <Typography variant={"h3"}>
                Question {progress}/3:
            </Typography>
        </Grid>
        <Grid item xs={10}>
            <LinearProgress variant="determinate" value={progress * 33} color={"secondary"}
                            className={classes.quizProgress}/>
        </Grid>
        <Grid item xs={10}>
            <Box className={classes.quizPanel}>

                <img src={imageLocation} className={classes.quizImage} alt={"mobile phone with location"}/>

                <Grid className={classes.quizGrid} container alignItems={"center"} justify="center"
                      spacing={5}>

                    <Grid item xs={10}>
                        <Typography variant={"h4"} align={"center"}>
                            {question}
                        </Typography>

                    </Grid>

                    <Grid item xs={10}>
                        <Typography variant={"h5"} align={"center"}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        {final && <Grid item> <Typography variant={"h4"} align={"center"}>Wir suchen...</Typography></Grid>}
        <Grid item>
            {(final === undefined || !final) && <NoButton nextUrl={nextPage}/>}
        </Grid>
        <Grid item>
            {(final === undefined || !final) && <YesButton nextUrl={nextPage}/>}
        </Grid>
    </Grid>;
}

export default QuizPage;
