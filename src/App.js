import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);

   const EMAIL = 'jose@gmail.com';
   const PASSWORD = 'jose123';
   
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            //setCharacters((oldChars) => [...oldChars, data]);
            setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterDel = characters.filter(characterId => characterId.id !== parseInt(id));
      setCharacters(characterDel);
   }

   return (
      <div className='App'>
         <Routes>
            {location.pathname !==  '/' &&  <Nav onSearch={onSearch} />}
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home'
            element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
