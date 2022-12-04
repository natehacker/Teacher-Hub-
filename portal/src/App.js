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
    if (token){
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Main setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>
      <Footer />
    </div>
  );
}

export default App;
