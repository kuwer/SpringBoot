import './TodoApp.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute( {children} ){
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children
    
    return <Navigate to="/" />
}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                <   Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                 
                    <Route path='/Welcome/:username' element={
                        <AuthenticatedRoute> 
                            <WelcomeComponent/>
                        </AuthenticatedRoute>
                    }/>
                    
                    <Route path='/todos' element={<AuthenticatedRoute> <ListTodoComponent/> </AuthenticatedRoute>}></Route>
                    <Route path='/logout' element={<AuthenticatedRoute> <LogoutComponent/> </AuthenticatedRoute>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>                
                </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}













