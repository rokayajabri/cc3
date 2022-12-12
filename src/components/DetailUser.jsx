import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { listuser } = useSelector(state => state.user.user)
    const selectedUser = listuser.users.filter(item => item.id == id)
    return (
        <div>
            {
                selectedUser.map(item => <div className='Details' key={item.id}>
                    <div className='image'>
                        <img src={item.image} alt="Picture" />
                    </div>
                    <div>
                        <div className='section'>
                            <label>username: </label>
                            <span>{`${item.firstName} ${item.lastName}`}</span>
                        </div>
                        <div className='section'>
                            <label>Age: </label>
                            <span>{item.age}</span>
                        </div>
                        <div className='section'>
                            <label>Gender: </label>
                            <span>{item.gender}</span>
                        </div>
                        <div className='section'>
                            <label>Email: </label>
                            <span>{item.email}</span>
                        </div>
                        <div className='section'>
                            <label>Phone: </label>
                            <span>{item.phone}</span>
                        </div>
                        <div className='section'>
                            <label>Weight: </label>
                            <span>{item.weight}</span>
                        </div>
                        <div className='section'>
                            <label>Height: </label>
                            <span>{item.height}</span>
                        </div>
                        <div className='section'>
                            <label>birthDate: </label>
                            <span>{item.birthDate}</span>
                        </div>
                        <div className='section'>
                            <label>bloodGroup: </label>
                            <span>{item.bloodGroup}</span>
                        </div>
                        <div className='section'>
                            <label>EyesColor: </label>
                            <span>{item.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}