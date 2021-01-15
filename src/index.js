//Import Area
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Class Component
class A extends Component{
    //1.Property
    state = {
        name:''
    }

    //2.Constructor
    constructor(props){
        super(props);
        //Initialize the member
        this.state = { name :''};
    }
    //3.Methods
    mynamechange = (event)=>{
        console.log(event.target.value);
        this.setState({ name:event.target.value});
    }
    //Every Class Component must have render method which always return HTML(JSX)
    render(){
        return(
            <div>
                <h1>Hello React Form</h1>

                <h1>Hello {this.state.name}</h1>
                <form>
                    <label for="a">Please Enter your name</label>
                    <input id="a" type="text" onChange={this.mynamechange} />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<A />,document.getElementById('root'));