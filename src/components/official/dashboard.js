
import React, { Component } from 'react';
import Calendar from './calendar';
import RiderRequests from './RiderRequest';
import Statitics from './statitics';
import ApprovalPane from './approvalPane';
import {getRiderRequestByDate,postRiderStatus} from '../../api/apiService';

export class Dashboard extends Component {
    
    state={
        popup:false,
        riderListFlag:false,
        selectedDate: new Date(),
        officials:{ 
        	manualApprovalRiders : [
            { sourceState :"Kerala", sourceDistrict :"Trichur", destinationState:"Karnadaka", destinationDistrict:"MYSORE",status:"APPROVED" , requestedDate :"12/05/2020",purpose:"chumma",approxKms :"10",	vehicleNumber:"1231",mobileNum :"12123221",purposeDesc :"asdashdggs",approvalMethod :""},
            { sourceState :"Kerala", sourceDistrict :"Trichur", destinationState:"Karnadaka", destinationDistrict:"MYSORE",status:"APPROVED" , requestedDate :"12/05/2020",purpose:"chumma",approxKms :"10",	vehicleNumber:"1231",mobileNum :"12123221",purposeDesc :"asdashdggs",approvalMethod :""},
            { sourceState :"Kerala", sourceDistrict :"Trichur", destinationState:"Karnadaka", destinationDistrict:"MYSORE",status:"APPROVED" , requestedDate :"12/05/2020",purpose:"chumma",approxKms :"10",	vehicleNumber:"1231",mobileNum :"12123221",purposeDesc :"asdashdggs",approvalMethod :""},
            ]
         },
         rider:{
          sourceState :"Kerala", sourceDistrict :"Trichur", destinationState:"Karnadaka", destinationDistrict:"MYSORE",status:"APPROVED" , requestedDate :"12/05/2020",purpose:"chumma",approxKms :"10",	vehicleNumber:"1231",mobileNum :"12123221",purposeDesc :"asdashdggs",approvalMethod :""      
          },
          riderStatusData :{
                  id:"",
                  status:""
          }
    }

    onClickApprove=(status,id)=>{

        alert(status);
        alert(id);
        
      const  riderStatusData= {
           id:{id},
           status:{status}

       }
  
       postRiderStatus(riderStatusData).then((res)=>{ 
            console.log("response--");            
          /*this.setState({...this.state,  details:true, ...this.state.officials.manualApprovalRiders} );*/
          
        });

        this.setState({...this.state, popup:false});
        
    }

    onClickView=()=>{
        this.setState({...this.state, popup:true,...this.state.officials.manualApprovalRiders});
    }

    onClickClose=()=>{
        this.setState({...this.state,popup:false});
    }
   
    
    handleDateChange = (date) => {
        this.setState({selectedDate : date });        
        getRiderRequestByDate(this.state.selectedDate).then((res)=>{ 
            console.log(res);
          this.setState({...this.state,  details:true, ...this.state.officials.manualApprovalRiders} );
          
        });
      }

      
  onChange= (e)=>{
    let val=e.target.value;
    if(val===true || val === false){
      val= !this.state[e.target.name];
    }
    this.setState({...this.state, [e.target.name]: val});
  }


    render() {
        
        return (
            <div>
                <h2>Dashboard</h2>
                <Calendar value={this.state.selectedDate} onChange={this.handleDateChange.bind(this)} />
                <Statitics/>
                {this.state.popup && <ApprovalPane onClickClose={this.onClickClose.bind(this)} onClickApprove={this.onClickApprove.bind(this)} rider={this.state.rider} />}
                <RiderRequests popup={this.state.popup} onClickView={this.onClickView.bind(this)} riders={this.state.officials.manualApprovalRiders} />
            </div>
        )
    }
}

export default Dashboard
