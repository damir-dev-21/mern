import React from 'react';
import 'materialize-css'
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';


const App = () =>{
  const {token,login,logout,userId,ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if(!ready){
    return <Loader/>
  }

  return( 
    <AuthContext.Provider value={{
      token,login,logout,userId,isAuth
    }}>
      <Router>
      {isAuth && <Navbar/>}
      <div className="container">
        {routes}
      </div>
    </Router>
    </AuthContext.Provider>
  )
}

export default App