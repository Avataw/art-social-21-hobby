import React, {useState} from 'react';
import {Box, createStyles, Grid, Input, LinearProgress, makeStyles, Theme, Typography} from "@material-ui/core";
import location from "./undraw/undraw_my_location.svg"
import {NextQuestionButton} from "./NextQuestionButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);


function InputQuizPage() {
    const classes = useStyles();
    const [input, setInput] = useState("");

    function handleInputChanged(event: any) {
        setInput(event.target.value);
    }

    return <Grid container
                 alignItems="center"
                 justify="center"
                 spacing={2}>
        <Grid item xs={10}>
            <Typography variant={"h3"}>
                Question 1/3:
            </Typography>
        </Grid>
        <Grid item xs={10}>
            <LinearProgress variant="determinate" value={0} color={"secondary"}
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
                               className={classes.quizInput}
                        onInput={handleInputChanged}/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item>
            <NextQuestionButton nextUrl={"/secondQuizPage"} enabled={input != ""}/>
        </Grid>
    </Grid>;
}

export default InputQuizPage;
