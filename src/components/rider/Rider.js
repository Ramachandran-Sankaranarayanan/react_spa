import React , { Component } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Demo from "./selectState";
import VehiclenumberText from "./vehiclenumber";
import Purpose from "./purpose";
import MobileNumber from "./mobilenumber";
import KiloMeter from "./kilometer";
import Description from "./description";
import SaveButton from "./savebuttton";
import InterState from "./interstate";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postRider}  from '../../actions/riderAction';


export class Rider extends Component {

  state={
    description:"",
    interstate:false,
    vehicleNumber:"",
    purpose:"",
    mobile:"",
    kilometer:"",
    demog:{
      s_state:"",
      s_dist:"",
      d_state:"",
      d_dist:""
    }

  }

  componentWillReceiveProps(next){
    console.log(next);
    if(next.postStatus){
      alert("Status", next.postStatus);
    }
  }

  onChange= (e)=>{
    let val=e.target.value;
    if(val==true || val == false){
      val= !this.state[e.target.name];
    }
    this.setState({...this.state, [e.target.name]: val});
  }

  onSubmit=()=>{
    this.props.postRider(this.state);
  }


  render() {
    return (
      <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rider Form
        </Typography>
        <InterState value={this.state.interstate} onChange={this.onChange.bind(this)}/>
        <Demo value={this.state.demog} interstate={this.state.interstate} onChange={this.onChange.bind(this)}  />
        <VehiclenumberText value={this.state.vehicleNumber} onChange={this.onChange.bind(this)}  />
        <Purpose value={this.state.purpose}  onChange={this.onChange.bind(this)} />
        <MobileNumber value={this.state.mobile} onChange={this.onChange.bind(this)} />
        <KiloMeter value={this.state.kilometer} onChange={this.onChange.bind(this)}  />
        <Description value={this.state.description} onChange={this.onChange.bind(this)} />
        <SaveButton onClick={this.onSubmit.bind(this)} />
      </Box>
    </Container>
    )
  }
}

Rider.propTypes = {
  postRider: PropTypes.func.isRequired,
  riderData: PropTypes.object
};

const mapStateToProps = st => ({
  riderData: st.rider.data,
  postStatus: st.rider.status
});

export default connect(mapStateToProps, { postRider })(Rider);


