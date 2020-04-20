import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VerifyRideInfo from './verifyRideInfo';
import {verifyRide} from '../../api/apiService'

import './verifyRide.css';

export class VerifyRide extends Component {
    state={
        details: false,
        vehicle:"",
        detailsData:{
            source:"BANGLORE",
            dest:"MYSORE",
            status:"APPROVED",
            date:"12/05/2020",
            fromTime:"10:00",
            toTime:"14:00"
        }
    }
    verify=()=>{
        verifyRide(this.state.vehicle).then((res)=>{           
            this.setState({...this.state, details:true, detailsData:res.data } );
        });        
    }

    onChange=(e)=>{
        this.setState({...this.state,vehicle:e.target.value});
    }

    render() {
        return (
            <div className="verify-outer-box">
                <Typography variant="h6" className="titleTextVerify"> Verify Ride Application Status </Typography>
                <TextField value={this.state.vehicle} id="outlined-basic" label="Vehicle Number" onChange={this.onChange.bind(this)} variant="outlined" />
                <Button variant="outlined" color="primary" onClick={this.verify.bind(this)}> VERIFY </Button>
                {this.state.details && <VerifyRideInfo value={this.state.detailsData} />}
            </div>
        )
    }
}

export default VerifyRide
