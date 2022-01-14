import './App.module.css';
import Routes from 'routes';
import Container from 'components/Container';
import Header from 'components/Header';

const App = () => {
  const isLoggedIn = false;

  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main className="app">
        <Container>
          <Routes isLoggedIn={isLoggedIn} />
        </Container>
      </main>
    </>
  );
};

export default App;
