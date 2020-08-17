import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import fire from './config/Fire';

class App extends Component{
  constructor(){
    super();
    this.state={
      user: null
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }
  render(){
      return(
        <div>
          <p>Initially you have two users, User1 and User2. You can Enable and disable the buttons from user1. You can see changes dynamically in user2. For better Experiennce kindly register and login with emails, user1@gmail.com and user2@gmail.com</p>
          {this.state.user ? <Home email = {this.state.user.email}/>:<LoginRegister/>}
        </div>
      );    
  }
}

export default App;
