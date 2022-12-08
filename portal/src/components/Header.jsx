import { NavLink, useLocation } from 'react-router-dom'
import SVGDigitalClassroom from './elements/SVGs/SVGDigitalClassroom';

export default function Header ({user, authenticated, handleLogOut}) {
    const location = useLocation();
    return (
        <header>
       

            <SVGDigitalClassroom/>

           <div className="headerInfo">
                {
                    (user && authenticated) ? (
                        <div className="userDiv">
                            <p>Welcome<br></br>{user.firstName}</p>
                        </div>
                    ): false
                }
            <nav>
              {
               (user && authenticated) ? (
                <NavLink onClick={handleLogOut} to="/">
                    <div className="navFlex"><span>Log Out</span></div>
                </NavLink> 
                ) : (location.pathname==="/portal") ?
                (
                    <NavLink to="/">
                <div className="navFlex"><span>Log In</span></div>
                </NavLink>
                ) : (location.pathname==="/about" || location.pathname==="/registered")?(
                    <NavLink to="/">
                <div className="navFlex"><span>Log In</span></div>
                </NavLink>
                ):(
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
        </div>
        </header>
    )
}