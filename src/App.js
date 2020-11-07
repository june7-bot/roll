import React from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Home } from './pages';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import Auth from './hoc/auth';
import Board from './pages/Board/Board';
import BoardForm from './pages/Board/BoardForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components';
import DogRegister from './pages/Dog/DogRegister';
import DogList from './pages/Dog/DogList';
import DogInfo from './pages/Dog/DogInfo';
import MyPage from './pages/User/Mypage';
import MyPageInfo from './pages/User/MyPageInfo';
import MyAdopt from './pages/User/MyAdopt';
import MyParcel from './pages/User/MyParcel';
import IdFind from './pages/User/IdFind';
import PwFind from './pages/User/PwFind';
import PwChange from './pages/User/PwChange';
import Transaction from './pages/Admin/Transaction';
import Profile from './pages/Admin/Profile';
import CurrentStatus from './pages/User/CurrentStatus';
import Blockchain from './pages/Admin/blockchain/src/Blockchain';


function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <Header/>
    <GlobalStyle />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
     
            <Route exact path="/" component = {Auth (Home, null, false) }/>
            <Route exact path="/register" component = { Auth(Register, false, false) } />
            <Route exact path="/login" component = { Auth( Login, false, false) } />
            <Route exact path="/dogregister" component = { Auth( DogRegister , true, false) } />
            <Route exact path="/admin" component = { Auth( Admin , true, true) } />
            <Route exact path="/board" component = {Auth (Board, null, false) }/>
            <Route exact path="/boardform" component = {Auth (BoardForm, null, false) }/>
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
            <Route exact path="/admin/blockchain/:orderId" component = { Auth( Blockchain , true, true) } />
            
       </Switch>
       </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
