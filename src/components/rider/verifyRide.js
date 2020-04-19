import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VerifyRideInfo from './verifyRideInfo';

import './verifyRide.css';

export class VerifyRide extends Component {
    state={
        details: false
    }
    verify=()=>{
        this.setState({...this.state, details:true } );
    }
    render() {
        return (
            <div className="verify-outer-box">
                <Typography variant="h6" className="titleTextVerify"> Verify Ride Application Status </Typography>
                <TextField id="outlined-basic" label="MobileNumber" variant="outlined" />
                <Button variant="outlined" color="primary" onClick={this.verify.bind(this)}> VERIFY </Button>
                {this.state.details && <VerifyRideInfo/>}
            </div>
        )
    }
}

export default VerifyRide
