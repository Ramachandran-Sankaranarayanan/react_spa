import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SwitchLabels(props) {
  const classes = useStyles();


  return (
    <FormGroup row>
      <FormControlLabel
        label="Inter State"
        className={classes.formControl}
        control={
          <Switch
            name="interstate"
            checked={props.value}
            onChange={props.onChange.bind(this)}
            color="primary"
          />
        }
      />
    </FormGroup>
  );
}
