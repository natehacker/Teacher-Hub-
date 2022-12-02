import { Link } from 'react-router-dom'

export default function Header () {


    return (
        <div className="header">
            <img className="header-logo" src="https://ga-cms-production-herokuapp-com.global.ssl.fastly.net/assets/ga-lockup-98c1ddeda4a74d005f14cdf28b99c214dfda1b47c2c5f1141a48bee2ec21f3b0.png" alt =""/>
            
            <p className="login-register"><Link to="/">Log In</Link> | <Link to ="/register">Register</Link></p>
        </div>
    )
}