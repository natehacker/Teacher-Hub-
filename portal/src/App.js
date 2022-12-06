import { useState, useEffect } from 'react';
import {CheckSession} from './services/Auth';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async ()=> {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  }

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token){
      checkToken()
    }
    if(storedUser){
      setUser(storedUser);
    }
  }, [])
  return (
    <div className="App">
      <Header user={user} authenticated={authenticated} handleLogOut={handleLogOut}/>
      <Main user={user} authenticated={authenticated} setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>
      <Footer />
    </div>
  );
}

export default App;