import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { TitleContext } from './context/titleContext';
// import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [title, setTitle] = useState('Homework');

  const updateTitle = (title) => {
    setTitle(title);
  }

  const titleData = {
    title,
    updateTitle
  }

  return (
    <>
      <BrowserRouter>
      <TitleContext.Provider value={titleData}>
        <Header />
        <Main />
      </TitleContext.Provider>

      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
