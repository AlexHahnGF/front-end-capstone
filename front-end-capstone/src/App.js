import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { VStack } from "@chakra-ui/react";
import Header from './components/Header';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </>
    // <BrowserRouter>
    //     <Nav />
    //     <Header />
    //     <Main />
    //     <Footer />
    // </BrowserRouter>
  );
}

export default App;
