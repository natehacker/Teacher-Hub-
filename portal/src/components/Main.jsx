import { Route, Routes } from 'react-router-dom'
import SignInForm from "./SignInForm"
import RegisterForm from "./RegisterForm"
import Portal from "./Portal"


export default function Main () {


    return (
        <main className="main">
            <Routes>
                <Route path="/" element = {<SignInForm />} />
                <Route path="/register" element = {<RegisterForm />}/>
                <Route path="/portal" element = {<Portal/>}/>
            </Routes>
        </main>
    )
}