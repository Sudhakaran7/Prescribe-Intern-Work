import Firebase from 'firebase';
import React, {Component} from 'react';
import fire from '../config/Fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            block1:null,
            block2:null
        }
      }
    
    logout = () => {
        fire.auth().signOut();
    }

    writeUserData = () => {
        Firebase.database().ref('/').set(this.state);
        console.log('DATA SAVED');
      }

    trigerUpdateBlock1 = () => {
        var i=0;
        do {
            this.setState({
                block1:!this.state.block1,
                block2: this.state.block2
            })
         
          
          this.writeUserData()  
          i=i+1          
        }while(i===1)
    }

    trigerUpdateBlock2 = () => {
         
        var i=0;
        do {
            this.setState({
                block1:this.state.block1,
                block2:!this.state.block2
            })
         
          
          this.writeUserData()  
          i=i+1          
        }while(i===1)
}

    componentDidMount() {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          console.log('Data: ', state)
          this.setState({block1:state['block1'], block2:state['block2']});
        });
        console.log('DATA RETRIEVED');
      }

      admin = () => {
        return(
            <div>
                <h1>You are User1!</h1>
                <button onClick={this.trigerUpdateBlock1}>Click here to disable or enable block1</button> <button disabled={this.state.block1?false:true}>block1</button>
                <br></br>
               
                <br></br>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }

      user = () => {
        return(
            <div>
                <h1>You are User2!</h1>
                <button disabled={this.state.block1}>block1</button>
                <br></br>
                
                <br></br>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }

    
    
  
    render(props){
       
       if (this.props.email.includes("user1")) {
           return this.admin();
       }
       return this.user();
    }
    
}

export default Home;