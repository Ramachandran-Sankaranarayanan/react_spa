
import React, { Component } from 'react';
import Calendar from './calendar';
import RiderRequests from '../rider/RiderRequest';


export class Dashboard extends Component {
    
    render() {
        
        return (
            <div>
                <h2>Dashboard</h2>
                <Calendar/>
                <RiderRequests/>
            </div>
        )
    }
}

export default Dashboard
