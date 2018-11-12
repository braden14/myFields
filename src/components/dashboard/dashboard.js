import React, {Component} from 'react';
import './dashboard.css';
import * as firebase from 'firebase';
import moment from 'moment';
import Reports from '../reports/reports';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {

    // creates empty instance of dashboard
    constructor(props){
        super(props);
        this.state = {
            user: null,
            reports: []
                     }
    }

    // populate reports to be used in render
    componentWillMount() {
        var uid = firebase.auth().currentUser.uid;

        // get user from firestore
        firebase.firestore().collection('users').doc(uid).get().then((snapshot) => {
          var user = snapshot.data();
          var rids = user.reports;

          // populate reports in array
          var promises = [];
          var keys = []
          var i = 0;
          for(var key in rids) {
            promises.push(
              firebase.firestore().collection('reports').doc(rids[key]).get()
            );
            keys.push(rids[key])
          }

          // process to load in dashboard
          Promise.all(promises).then(snapshots => {
            var reports = snapshots.map(snapshot => {
              var report = snapshot.data();
              report.url = '/reports/' + keys[i];
              i++;
              return report;
            }).filter(report => report.appID === "myFields");
            this.setState({reports: reports});
          });
        });
    }

    // populate dashoboard with reports and new report button
    render(){
        var reps = this.state.reports.reverse();
        var reports = reps.map((item) =>{
            return <Link key={item.name} to={item.url}><div className="line"></div><div className="report-name">{item.name}</div> <div>Crop: {item.crop}</div> <div>Pest: {item.pest}</div> {moment(item.time).format('MMMM Do YYYY hh:mm a')}</Link>
        })
        return(
            <div className="dashboard-container">

                <Link className="create-report-button" to="/reports">New Report</Link>

                <h1>Past Reports</h1>

                <div className="report-list" style={{display: 'flex', flexDirection: 'column'}}>
                    {reports}
                </div>
                <div className="line"></div>

            </div>
        );
    }


}
