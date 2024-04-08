import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retrieveHelloWorldApi, retrieveHelloWorldPathVariableApi } from './api/HelloWorldApiService'

export default function WelcomeComponent(){
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldApi(){

        
        // axios.get('http://localhost:8080/hello-world')
        // .then((response) =>  successfulResponse(response))
        // .catch((error) => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        // retrieveHelloWorldApi()
        // .then((response) =>  successfulResponse(response))
        // .catch((error) => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        retrieveHelloWorldPathVariableApi('kuwer')
        .then((response) =>  successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)

    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome to Todo App {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldApi}>Call hello world API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}