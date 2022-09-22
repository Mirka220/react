import React from "react";

class ClassComponent extends React.Component {
    render(){
        return <div>
            <h1>Class Component</h1>
            <h3>Name: {this.props.name}</h3>
            <h3>Age: {this.props.age}</h3>
        </div>
    }
}

export default ClassComponent;