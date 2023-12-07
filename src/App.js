import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Coctails from './components/Coctails';
import Blog from './components/Blog/Blog';
import Categories from './components/Categories/Categories';
import Contacts from './components/Contacts/Contacts';


export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ data: usersCount, changeFunction: setUsersCount }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/coctails' element={<Coctails />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
