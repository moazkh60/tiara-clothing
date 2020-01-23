import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signInSignUp/signInSignUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUserAction } from './reducer/user/user.actions';
import { selectCurrentUser } from "./reducer/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

function App() {

  const dispatch = useDispatch()

  const user = useSelector(state => selectCurrentUser(state) )

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUserAction({
            id: snapShot.id,
            ...snapShot.data()
          }));
        });
      }
      dispatch(setCurrentUserAction(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => user ? ( <Redirect to='/' /> ) : (
            <SignInSignUpPage />
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
