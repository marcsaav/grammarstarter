import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialCredentials = {
    username: '',
    password: ''
}

function Login() {
    let [ credentials, setCredentials ] = useState(initialCredentials)
    const { push } = useHistory()

    const handleChanges = (e) => {
        const { name, value } = e.target

        setCredentials({
            credentials,
            [name]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios
            .post()
            .then((res) => {
                localStorage.setItem('token', res.data.payload)
                push('/home')
            })
            .catch((err) => {
                alert(`${err.message}`)
            })
    }

    return(
        <form onSubmit={handleLogin}>
            <label>Username:
                <input
                name='username'
                type='text'
                value = {credentials.username}
                onChange={handleChanges}
                >
                </input>
            </label>
            <label>Password:
                <input
                name='password'
                type='text'
                value = {credentials.password}
                onChange={handleChanges}
                >
                </input>
            </label>
        </form>
    )
}

export default Login