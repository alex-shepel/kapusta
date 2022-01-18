import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { refresh, getIsLoggedIn } from 'redux/auth';
import './App.module.css';
import Routes from 'routes';
import Container from 'components/Container';
import Header from 'components/Header';
import { ChartComp } from '../Chart/Chart';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refresh());
    }
  }, [isLoggedIn, dispatch]);
  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main className="app">
        <ChartComp />
        <Container>
          <Routes isLoggedIn={isLoggedIn} />
        </Container>
      </main>
    </>
  );
};

export default App;
