import React, {useState} from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {age: props.age};
    
        this.changeAge = this.changeAge.bind(this);
    }

    changeAge(event){
        this.props.change(this.state.age);
        event.preventDefault();
    }

    render(){
        return <div>
            <h1>Class Component</h1>
            <h3>Name: {this.props.name}</h3>
            <h3>Age: {this.state.age}</h3>
            
            <input type="text" value={this.state.age} onChange={(event) => this.setState({age: event.target.value})}/>
            <button onClick={this.changeAge}>Изменить возраст</button>
        </div>
    }
}

export default ClassComponent;