import React from 'react';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { AuthProvider } from './hooks/AuthContext';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './styles/Global';
import {ToastProvider} from './hooks/ToastContext';
import Routes from './routes';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';



const App: React.FC = ()=>(
  <Router>
   <AppProvider>
    <Routes />
  </AppProvider>

  <GlobalStyle/>
  </Router>
);

export default App;
