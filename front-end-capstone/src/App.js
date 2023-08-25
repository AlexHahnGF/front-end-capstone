import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Head from './components/Head';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Head />
        <Header />
        <Nav />
        <Main />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
