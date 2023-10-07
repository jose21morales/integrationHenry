import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const DivCard = styled.div`
   background-color: #eee;
   position:relative;
   width: 230px;
   height: 400px;
   border-radius:10px;
   border-top-right-radius:22px;
   margin: 10px 0;
   overflow:hidden;
`;

const ButtonClose = styled.button`
   background: red;
   position:absolute;
   right:0;
   z-index:10000;
   color: #fff;
   padding: 10px;
   border:0;
   border-radius: 50%;
   font-size: 16px;
   font-weight: bold;
   width: 40px;
   height: 40px;

   &:hover {
      background: #333;
      cursor: pointer;
   }
`;

const IdCard = styled.h2`
   display: none;
`;

const NameCard = styled.h2`
   background-color: yellow;
   padding: 5px;
   width: 180px;
   z-index:10000;
   font-size: 18px;
   position:absolute;
   margin-top: 200px;
`;

const StatusCard = styled.h2`
   display: none;
`;

const SpeciesCard = styled.h2`
   position:absolute;
   margin-top:350px;
   font-size: 18px;
   padding: 0 10px;
`;

const GenderCard = styled.h2`
   position:absolute;
   right:0;
   margin-top:350px;
   padding: 0 10px;
   font-size: 18px;
`;

const OriginCard = styled.h2`
   position:absolute;
   margin:290px 0 auto;
   font-size: 18px;
   padding: 0 10px;
`;

const ImgCard = styled.img`
   position:absolute;
   left:0;
   width: 250px;
   margin-top:0px;
`;
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => {
         dispatch(addFav);
      },
      removeFav: () => {
         dispatch(removeFav);
      }
   }
}
const Card = (props) => {
   const isFav = useState(false);

   const onClose = () => {
      props.onClose(props.id)
   }

   const handleFavorite = () => {

   }

   return (
      <DivCard>
         <ButtonClose onClick={onClose}>X</ButtonClose>
         <IdCard>{props.id}</IdCard>
         <Link to={`/detail/${props.id}`}>
            <NameCard>{props.name}</NameCard>
         </Link>
         <StatusCard>{props.status}</StatusCard>
         <SpeciesCard>{props.species}</SpeciesCard>
         <GenderCard>{props.gender}</GenderCard>
         <OriginCard>{props.origin}</OriginCard>
         <ImgCard src={props.image} alt='' />
      </DivCard>
   );
}
export default connect(null, mapDispatchToProps)(Card);