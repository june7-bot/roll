import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Home } from './pages';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Admin from './pages/Admin/admin';
import Auth from './hoc/auth';
import About from './pages/About/About';
import Board from './pages/Board/Board';
import Registercho from './pages/Register/Registercho';
import Register1 from './pages/Register/Register1';
import BoardForm from './pages/Board/BoardForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components';


function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
            <Route exact path="/" component = {Auth (Home, null, false) }/>
            <Route exact path="/register" component = { Auth(Register, false, false) } />
            <Route exact path="/register1" component = { Auth(Register1, false, false) } />
            <Route exact path="/registerc" component = { Auth(Registercho, false, false) } />
            <Route exact path="/login" component = { Auth( Login, false, false) } />
            <Route exact path="/user" component = { Auth( User , true, false) } />
            <Route exact path="/admin" component = { Auth( Admin , true, true) } />
            <Route exact path="/about" component = {Auth (About, null, false) }/>
            <Route exact path="/board" component = {Auth (Board, null, false) }/>
            <Route exact path="/boardform" component = {Auth (BoardForm, null, false) }/>
       </Switch>
       </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
