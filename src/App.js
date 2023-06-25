import React, { useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Home from './Components/Home/home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Support from './Components/Support';
import Legal from './Components/LegalTerms/Legal';
import Otp from './Components/Otp/Otp';
import Profile from './Components/Profile.jsx/Profile';
import Play from './Components/Play/Play';
import Challenge from './Components/Play/Challenge';
import Wallet from './Components/Profile.jsx/Wallet';
import Payment from './Components/Profile.jsx/Payment';
import { Spinner, Toast, useMediaQuery, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from './redux/action/user';
import Loginotp from './Components/Otp/Loginotp';
import Playground from './Components/Play/Playground';

function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const { isAuthenticated, user, message, error ,loading } = useSelector(state => state.user);
  

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        isClosable: true,
      });
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast({
        title: 'success',
        description: message,
        status: 'success',
        isClosable: true,
      });
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message,isAuthenticated,user]);

  useEffect(() => {
      dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <>
    {isLargerThan800 ?(
      <Router>
        {loading ?(<Spinner/>):(
          <>
          <Header isAuthenticated={isAuthenticated} user={user}  />
          <Routes>
            <Route path='/' element={<Home/>} objectFit="contain" />
            <Route path='/register' element={<Register/>} objectFit="contain" />
            <Route exact path='/login' element={<Login/>} objectFit="contain" />
            <Route path='/support' element={<Support/>} objectFit="contain" />
            <Route path='/terms-of-service' element={<Legal/>} objectFit="contain" />
            <Route path='/otp' element={<Otp/>} objectFit="contain" />
            <Route path='/login-otp' element={<Loginotp/>} objectFit="contain" />
            <Route path='/profile' element={<Profile isAuthenticated={isAuthenticated} user={user}/>} objectFit="contain" />
            <Route path='/play'  element={<Play isAuthenticated={isAuthenticated} user={user} />} objectFit="contain" />
            <Route path='/challenges' element={<Challenge isAuthenticated={isAuthenticated} user={user} />} objectFit="contain" />
            <Route path='/wallet' element={<Wallet/>} objectFit="contain" />
            <Route path='/payment' element={<Payment/>} objectFit="contain" />
            <Route path='/playground' element={<Playground/>} objectFit="contain" />
          </Routes>
          </>
          
        )}
    </Router>
    ):(
      <Router>
        {loading ?(<Spinner/>):(<>
          {isAuthenticated?(
            <>
            <Header isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          <Route path='/' element={<Home/>} objectFit="contain" />
          <Route path='/register' element={<Register/>} objectFit="contain" />
          <Route path='/login' element={<Login/>} objectFit="contain" />
          <Route path='/support' element={<Support/>} objectFit="contain" />
          <Route path='/terms-of-service' element={<Legal/>} objectFit="contain" />
          <Route path='/otp' element={<Otp/>} objectFit="contain" />
          <Route path='/login-otp' element={<><Loginotp/></>} objectFit="contain" />
          <Route path='/profile' element={<Profile isAuthenticated={isAuthenticated} user={user}/>} objectFit="contain" />
          <Route path='/play' element={<Play isAuthenticated={isAuthenticated} user={user} />} objectFit="contain" />
          <Route path='/challenges' element={<Challenge isAuthenticated={isAuthenticated} user={user} />} objectFit="contain" />
          <Route path='/wallet' element={<Wallet/>} objectFit="contain" />
          <Route path='/payment' element={<Payment/>} objectFit="contain" />
          <Route path='/playground' element={<Playground/>} objectFit="contain" />
        </Routes>
            </>):(
              <>
              <Header />
        <Routes>
          <Route path='/' element={<Home/>} objectFit="contain" />
          <Route path='/register' element={<Register/>} objectFit="contain" />
          <Route path='/login' element={<Login/>} objectFit="contain" />
          <Route path='/support' element={<Support/>} objectFit="contain" />
          <Route path='/terms-of-service' element={<Legal/>} objectFit="contain" />
          <Route path='/otp' element={<Otp/>} objectFit="contain" />
          <Route path='/login-otp' element={<><Loginotp/></>} objectFit="contain" />
          <Route path='/play' element={<Play />} objectFit="contain" />
        </Routes></>)}
        </>
        )}
        
      </Router>
    )}
    </>
  );
}

export default App;
