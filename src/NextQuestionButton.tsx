import {Box, Button, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

interface NextQuestionButtonProps {
    nextUrl: string,
    enabled : boolean
}

export function NextQuestionButton({nextUrl, enabled} : NextQuestionButtonProps) {

    const classes = useStyles();
    let history = useHistory();

    function handleClick() {
        history.push(nextUrl);
    }

    return <Box className={classes.buttonPanel}>
        <Button variant="outlined" size="large" className={classes.button}
                disabled={!enabled}
                onClick={handleClick}>
            <Typography variant={"h4"} className={classes.buttonText}>
                Next Question!
            </Typography>
        </Button>
    </Box>;
}