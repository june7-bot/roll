import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Home } from './pages';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import Auth from './hoc/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components';
import DogRegister from './pages/Dog/DogRegister';
import DogList from './pages/Dog/DogList';
import DogInfo from './pages/Dog/DogInfo';
import MyPage from './pages/User/MyPage.js';
import MyPageInfo from './pages/User/MyPageInfo';

import MyAdopt from './pages/User/MyAdopt';
import MyParcel from './pages/User/MyParcel';
import IdFind from './pages/User/IdFind';
import PwFind from './pages/User/PwFind';
import PwChange from './pages/User/PwChange';
import Transaction from './pages/Admin/Transaction';
import Profile from './pages/Admin/Profile';
import CurrentStatus from './pages/User/CurrentStatus';
import BlockChain from './blockchain/blockchain';


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
            <Route exact path="/doginfo/:itemId" component = { Auth( DogInfo , true, false) } />
            <Route exact path="/mypage" component = { Auth( MyPage , true, false) } />
            <Route exact path="/mypage/info/:userId" component = { Auth( MyPageInfo , true, false) } />
            <Route exact path="/mypage/currentstatus/:userId" component = { Auth( CurrentStatus , true, false) } />
            <Route exact path="/mypage/myadopt/:userId" component = { Auth( MyAdopt , true, false) } />
            <Route exact path="/mypage/myparcel/:userId" component = { Auth( MyParcel , true, false) } />
            <Route exact path="/idfind" component = { Auth( IdFind , false, false) } />
            <Route exact path="/pwfind" component = { Auth( PwFind , false, false) } />
            <Route exact path="/passwordChange/:userId" component = { Auth( PwChange , false, false) } />
            <Route exact path="/admin/transaction" component = { Auth( Transaction , true, true) } />
            <Route exact path="/admin/profile" component = { Auth( Profile , true, true) } />
            <Route exact path="/admin/blockchain" component = { Auth( BlockChain , true, true) } />
         
            
            
       </Switch>
       </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
