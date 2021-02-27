import {Box, Button, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import React from "react";

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

export function CallUsButton() {

    const classes = useStyles();

    return <Box className={classes.buttonPanel}>
        <Button variant="outlined" size="large" className={classes.button}>
            <Typography variant={"h4"} className={classes.buttonText}>
                Rufen Sie uns an!
            </Typography>
        </Button>
    </Box>;
}