import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import User from "./User";
import { getUsers } from '../redux/UserSlice';

export default function Produits() {
    const dispatch = useDispatch();
    const listuser = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(getUsers());
      },[dispatch]);
      console.log("user:", listuser);
  return (
    <div className="list">
      {listuser.length === 0 ? (
        <h1>Liste des utilisation est vide</h1>
      ) : (
        listuser.users.map((item) => <User users={item} />)
      )}
    </div>
  )
}


