import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const navigate = useNavigate();
   
    return (
        <div className='card'>
             <img src={props.users.image}/>
            <h2>{`${props.users.firstName} ${props.users.lastName}`}</h2>
            <button onClick={() => navigate(`/ListUser/${props.users.id}`)}>Detail User</button>
            <button onClick={() => navigate(`/ListTodo/${props.users.id}`)}>Liste des Taches</button>
        </div>
    );
}

export default User;


