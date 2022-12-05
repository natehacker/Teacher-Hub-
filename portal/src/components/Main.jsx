import { Route, Routes } from 'react-router-dom'
import SignInForm from "./SignInForm"
import RegisterForm from "./RegisterForm"
import Portal from "./Portal"
import RegisterConfirmation from "./RegisterConfirmation"


export default function Main ({setUser, toggleAuthenticated}) {


    return (
        <main className="main">
            <Routes>
                <Route path="/" element = {<SignInForm setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
                <Route path="/register" element = {<RegisterForm />}/>
                <Route path="/portal" element = {<Portal/>}/>
                <Route path="/registered" element = {<RegisterConfirmation /> } />
            </Routes>
        </main>
    )
}