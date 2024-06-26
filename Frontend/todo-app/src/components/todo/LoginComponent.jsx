import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent(){

    const [username, setUsername] = useState("Kuwer")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else{
            setShowErrorMessage(true)
        }
    }


    return(
        <div className="Login">
            <h1>Please login</h1>
            <div className="LoginForm">
                {showErrorMessage && <div className="successMessage">Authentication Failed</div>}
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}