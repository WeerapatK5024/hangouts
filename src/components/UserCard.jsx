import React from 'react';
import "./UserCard.css";

const UserCard = (props) => {
    return (
        <div className='card'>
            <h1>{props?.name}</h1>
            <p>{props?.description}</p>
        </div>
    )
}

export default UserCard