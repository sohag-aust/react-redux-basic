import React from 'react';

function User(props) {

    const {id, name} = props.data;

    return (
        <div>
            <h1> Id :  {id} </h1>
            <h1> Name :  {name} </h1>
        </div>
    );
}
    
export default User;