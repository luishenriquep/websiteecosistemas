import React from 'react';

//import { Router } from 'react-router-dom';
//import Routes from './routes';
import { ThemeProvider } from 'styled-components';




import Header from '../src/components/header'
import OurServices from '../src/components/ourservices';
import History from '../src/components/history';
import OurClients from '../src/components/ourclients';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';

//import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <OurServices/>
      <History/> 
      <OurClients/>
      <Contact/>
      <Footer/>  

    </ThemeProvider>
  );
}

export default App;
