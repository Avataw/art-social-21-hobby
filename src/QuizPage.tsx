import React from 'react';
import {Box, createStyles, Grid, LinearProgress, makeStyles, Theme, Typography} from "@material-ui/core";
import {YesButton} from "./YesButton";
import {NoButton} from "./NoButton";

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
    imageLocation : string,
    progress: number,
    nextPage: string,
}

function QuizPage({question, description, imageLocation, progress, nextPage} : QuizPageProps) {

    const classes = useStyles();

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
        <Grid item>
            <NoButton nextUrl={nextPage}/>
        </Grid>
        <Grid item>
            <YesButton nextUrl={nextPage}/>
        </Grid>
    </Grid>;
}

export default QuizPage;
