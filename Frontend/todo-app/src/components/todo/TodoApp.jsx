import './TodoApp.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
            <   Route path='/' element={<LoginComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/Welcome/:username' element={<WelcomeComponent/>}></Route>
                <Route path='*' element={<ErrorComponent/>}></Route>

            </Routes>
            </BrowserRouter>
        </div>
    )
}

function WelcomeComponent(){
    const {username} = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome to Todo App {username}</h1>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>Sorry the page you are looking for is broken !</h1>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState("Kuwer")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='Kuwer' && password==='12345'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }


    return(
        <div className="Login">
            <h1>Please login</h1>
            <div className="LoginForm">
                {showSuccessMessage && <div className="successMessage">Authentication successful</div>}
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