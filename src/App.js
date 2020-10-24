import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Home } from './pages';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/admin';
import Auth from './hoc/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components';
import DogRegister from './pages/Dog/DogRegister';
import DogList from './pages/Dog/DogList';

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
            <Route exact path="/login" component = { Auth( Login, false, false) } />
            <Route exact path="/dogregister" component = { Auth( DogRegister , true, false) } />
            <Route exact path="/admin" component = { Auth( Admin , true, true) } />
            <Route exact path="/doglist" component = { Auth( DogList , true, false) } />
       </Switch>
       </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
