import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Home } from './pages';
import Register from './pages/Register/Register';
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
            <Route exact path="/" component = { Home }/>
            <Route exact path="/register" component = { Register } />
       </Switch>
       </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
