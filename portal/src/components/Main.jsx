import { Route, Routes } from 'react-router-dom'
import SignInForm from "./Forms/SignInForm"
import RegisterForm from "./Forms/RegisterForm"
import Portal from "./Portal"
import About from "./About"
import RegisterConfirmation from "./Forms/RegisterConfirmation"

export default function Main ({setUser, toggleAuthenticated, user, authenticated}) {

    return (
        <main className="main">
            <Routes>
                <Route path="/" element = {<SignInForm setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
                <Route path="/register" element = {<RegisterForm />}/>
                <Route path="/portal" element = {<Portal/>}/>
                <Route path="/about" element = {<About/>}/>
                <Route path="/portal" element = {<Portal user={user} authenticated={authenticated}/>}/>
                <Route path="/registered" element = {<RegisterConfirmation /> } />
            </Routes>
        </main>
    )
}