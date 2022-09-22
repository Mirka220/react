import React from "react";

const FunctionComponent = (props) => {
    return(
        <div>
            <h1>Function Component</h1>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
        </div>
    );
};

export default FunctionComponent;