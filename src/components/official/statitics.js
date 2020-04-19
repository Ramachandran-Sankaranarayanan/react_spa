import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1rem",
  },
  paper: {
    height: "11rem",
    width: "15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
    border: "1px solid #eee",
    textTransform: "uppercase",
  },
  control: {
    padding: theme.spacing(2),
  },
  titleText: {
    fontWeight: 700,
    color: "#333",
    fontSize: "3.5rem",
    padding: "0.5rem",
  },
}));

export default function Statitics() {
  const classes = useStyles();

  return (
    <div>
     
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[
              { key: "Applied", value: 100 },
              { key: "Approved", value: 80 },
              { key: "Pending", value: 10 },
            ].map((value) => (
              <Grid key={value} item>
                <div className={classes.paper}>
                  <Typography
                    variant="h2"
                    align="center"
                    color="primary"
                    className={classes.titleText}
                  >
                    {" "}
                    {value.value}{" "}
                  </Typography>
                  <Typography
                    variant="overline"
                    align="center"
                    color="secondary"
                  >
                    {" "}
                    {value.key}{" "}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
