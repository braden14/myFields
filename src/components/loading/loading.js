//
// Kansas State University Extension Platform
// myFields Reporter Application
// Copyright Kansas State University 2019 All Rights Reserved
//

import React, {Component} from 'react';
import './loading.css';
import logo from '../../logo.png';


//File for the Create Report button. It will bring up all input fields necessary for a report
export default class Reports extends Component {
    //empty instance
    constructor(props) {
        super(props);
        this.state = {

        }

    }

// show logo
render(){
        return(

            <div className="loading-container">
                <div className="align-helper"></div>
                <img src={logo} alt="logo" />
            </div>

        )

    }

}
