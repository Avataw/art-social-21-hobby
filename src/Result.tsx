import {Box, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
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
        },
        resultImage: {
            border: '3px solid',
            width: "100%",
        }
    }),
);

interface ResultProps {
    title : string,
    description: string,
    image? : string,
}

export function Result({title, description, image} : ResultProps) {
    const classes = useStyles();

    return <Box className={classes.buttonPanel}>
            <Grid container className={classes.button}
                  alignItems="center"
                  justify="center"
                  spacing={2}
            >
                <Grid item xs={5}>
                    { image && <img src={image} className={classes.resultImage}/>}
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"} className={classes.buttonText}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h6"} className={classes.buttonText}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
}