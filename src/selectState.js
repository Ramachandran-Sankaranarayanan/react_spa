import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setStates] = React.useState("");

  const handleChange = event => {
    setStates(event.target.value);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="source-state">Source State</InputLabel>
        <Select
          labelId="source-state"
          id="source-state-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Kerala</MenuItem>
          <MenuItem value={20}>Tamil Nadu</MenuItem>
          <MenuItem value={30}>Karnadaka</MenuItem>
          <MenuItem value={40}>Andra</MenuItem>
          <MenuItem value={50}>Telengana</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="source-district">Source District</InputLabel>
        <Select
          labelId="source-district"
          id="source-district-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Kerala</MenuItem>
          <MenuItem value={20}>Tamil Nadu</MenuItem>
          <MenuItem value={30}>Karnadaka</MenuItem>
          <MenuItem value={40}>Andra</MenuItem>
          <MenuItem value={50}>Telengana</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="destination-state">Destination State</InputLabel>
        <Select
          labelId="destination-state"
          id="destination-state-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Kerala</MenuItem>
          <MenuItem value={20}>Tamil Nadu</MenuItem>
          <MenuItem value={30}>Karnadaka</MenuItem>
          <MenuItem value={40}>Andra</MenuItem>
          <MenuItem value={50}>Telengana</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="destination-district">Destination District</InputLabel>
        <Select
          labelId="destination-district"
          id="destination-district-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Kerala</MenuItem>
          <MenuItem value={20}>Tamil Nadu</MenuItem>
          <MenuItem value={30}>Karnadaka</MenuItem>
          <MenuItem value={40}>Andra</MenuItem>
          <MenuItem value={50}>Telengana</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
