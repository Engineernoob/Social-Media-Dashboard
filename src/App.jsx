import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'src/components/Navbar.jsx';
import Home from 'src/Pages/Home.jsx';
import Login from 'src/Pages/Login.jsx'
import Profile from 'src/Pages/Profile.jsx'
import Register from 'src/Pages/Register.jsx'
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </AuthProvider>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default App;
