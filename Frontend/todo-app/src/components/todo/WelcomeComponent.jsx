import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent(){
    const {username} = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome to Todo App {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}