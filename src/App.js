import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signInSignUp/signInSignUp.component';
import { auth } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return () => { unsubscribeFromAuth() }
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
