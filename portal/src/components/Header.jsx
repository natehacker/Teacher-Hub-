import { NavLink } from 'react-router-dom'

export default function Header ({user, authenticated, handleLogOut}) {


    return (
        <header>
            <img className="header-logo" src="https://ga-cms-production-herokuapp-com.global.ssl.fastly.net/assets/ga-lockup-98c1ddeda4a74d005f14cdf28b99c214dfda1b47c2c5f1141a48bee2ec21f3b0.png" alt =""/>
            
           
            <nav>
              {
               (user && authenticated) ? (
                
                <NavLink onClick={handleLogOut} to="/">
                    <div className="navFlex"><span>Log Out</span></div>
                    </NavLink> 
               
                ) : (
                <>
                <NavLink to="/">
                <div className="navFlex"><span>Log In</span></div>
                </NavLink>
                <NavLink to ="/register">
                <div className="navFlex"><span>Register</span></div>
                </NavLink>
                </>
                )

              }  
            
            </nav>
        </header>
    )
}