import React, {useState} from "react";

const FunctionComponent = (props) => {
    const [name, setName] = useState({name: props.name});

    const changeName = (event) => {
        props.change(name.name)
        event.preventDefault();
    }

    return(
        <div>
            <h1>Function Component</h1>
            <h3>Name: {name.name}</h3>
            <h3>Age: {props.age}</h3>
            <input type="text" value={name.name} onChange={(e) => setName({name: e.target.value})}/>
            <button onClick={changeName}>Изменить имя</button>
        </div>
    );
};

export default FunctionComponent;