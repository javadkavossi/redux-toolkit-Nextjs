"use client"

import { fetchUsers } from '@/redux/features/users/userSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Users() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    console.log(users);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div><h1>Users</h1>
            {users.loading ? "loading ... " : users.users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
    )
}

export default Users