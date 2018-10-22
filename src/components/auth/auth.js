import React, {Component} from 'react';
import './auth.css';
import * as firebase from 'firebase';
import LoginForm from '../login-form/login-form'

export default class Auth extends Component {

    //creates blank instance of user
    constructor(props){
        super(props);
        this.state = {
            user: null
                     }
    }

    // Gets user from firebase
    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({user:user});
            //console.log("Change" + this.state.user.uid);
        })
    }

    // if the user is log in continues
    // else presents log in form
    render() {
        if(this.state.user) {
            return (<div>{this.props.children}</div>);
        } else {
            return (<LoginForm></LoginForm>);
        }
    }
}
