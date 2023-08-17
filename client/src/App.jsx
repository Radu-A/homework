import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { TitleContext } from "./context/titleContext";
import { UserLoggedContext } from "./context/userLoggedContext";
import { UserContext } from "./context/userContext";
// import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  // Context for title state
  const [title, setTitle] = useState("Homework");
  const updateTitle = (title) => {
    setTitle(title);
  };
  const titleData = {
    title,
    updateTitle,
  };

  // Context for userLogged state
  const [userLogged, setUserLogged] = useState('');

  const updateUserLogged = (email) => {
    setUserLogged(email);
  };
  const userLoggedData = {
    userLogged,
    updateUserLogged,
  };

  // Context for user state
  const [user, setUser] = useState({});
  const updateUser = (user) => {
    setUser(user);
  };
  const userData = {
    user,
    updateUser,
  };

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={userData}>
          <UserLoggedContext.Provider value={userLoggedData}>
            <TitleContext.Provider value={titleData}>
              <Header />
              <Main />
            </TitleContext.Provider>
          </UserLoggedContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
