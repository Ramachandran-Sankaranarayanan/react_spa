
import React, { Component } from 'react';
import Calendar from './calendar';
import RiderRequests from './RiderRequest';
import Statitics from './statitics';
import ApprovalPane from './approvalPane';


export class Dashboard extends Component {
    
    state={
        popup:false
    }
    onClickApprove=(status)=>{

        alert(status);
        this.setState({...this.state, popup:false});
    }

    onClickView=()=>{
        this.setState({...this.state, popup:true});
    }

    onClickClose=()=>{
        this.setState({...this.state,popup:false});
    }


    render() {
        
        return (
            <div>
                <h2>Dashboard</h2>
                <Calendar/>
                <Statitics/>
                {this.state.popup && <ApprovalPane onClickClose={this.onClickClose.bind(this)} onClickApprove={this.onClickApprove.bind(this)} />}
                <RiderRequests popup={this.state.popup} onClickView={this.onClickView.bind(this)} />
            </div>
        )
    }
}

export default Dashboard
