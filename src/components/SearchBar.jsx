import styled from 'styled-components';
import React, { useState } from 'react';

const DivSearch = styled.div`
   background: gray;
   padding: 10px;
   display:flex;
   justify-content: flex-end;
   margin-bottom: 60px;float:right;
   width:400px;
`;

const InputSearch = styled.input`
   margin-right: 8px;
   height: 30px;
   border:0;
`;
const ButtonSearch = styled.button`
   background: yellow;
   color: gray;
   padding: 7px;
   border:0;
   border-radius: 5px;
   font-size: 14px;
   font-weight: bold;

   &:hover {
      background: #333;
      color: yellow;
      cursor: pointer;
   }
`;

export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = (e) => {
      setId(e.target.value);
   }
   const handleSearch = () => {
      props.onSearch(id);
   };
   return (
      <DivSearch>
         <InputSearch type='text' onChange={handleChange} value={id} placeholder='ID...' />
         <ButtonSearch onClick={handleSearch}>Agregar</ButtonSearch>
      </DivSearch>
   );
}
