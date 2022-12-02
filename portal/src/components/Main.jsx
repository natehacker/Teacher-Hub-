import { Route, Routes } from 'react-router-dom'
import SignInForm from "./SignInForm"
import RegisterForm from "./RegisterForm"


export default function Main () {


    return (
        <div className="main">
            <Routes>
                <Route path="/" element = {<SignInForm />} />
                <Route path="/register" element = {<RegisterForm />}/>
                <Route path="/portal" element = {<h1>portal</h1>}/>
            </Routes>
        </div>
    )
}