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
import RegistrationForm from './components/RegisrtationForm';
import Products from './components/Products/Products';
import SingleUserPage from './components/SingleUserPage';

import NotFoundPage from './components/NotFoundPage';


import { BLOG_PATH, CATEGORIES_PATH, COCTAILS_PATH, CONTACTS_PATH, HOME_PATH, NOT_FOUND_PATH, PRODUCTS_PATH, REGISTRATION_PATH, SINGLE_USER_PATH } from './constants/routes-links';


export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ data: usersCount, changeFunction: setUsersCount }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />}/>
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />}/>
          <Route path={COCTAILS_PATH} element={<Coctails />}/>
          <Route path={PRODUCTS_PATH} element={<Products />}/>
          <Route path={BLOG_PATH} element={<Blog />}/>
          <Route path={CATEGORIES_PATH} element={<Categories />}/>
          <Route path={CONTACTS_PATH} element={<Contacts />}/>

          <Route path={SINGLE_USER_PATH} element={<SingleUserPage />}/>

          <Route path={NOT_FOUND_PATH} element={<NotFoundPage />}/>

        </Routes>
        {/* <Main /> */}
        <Footer />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
