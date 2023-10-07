import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap:wrap;
   width:100%;
`;

export default function Cards(props) {
   return <DivCards>
      {props.characters.map(function (prop) {
         return (
         <Card
            key={prop.id}
            id={prop.id}
            name={prop.name}
            status={prop.status}
            species={prop.species}
            gender={prop.gender}
            origin={prop.origin.name}
            image={prop.image}
            onClose={props.onClose}
      />
      );
      })}

   </DivCards>;
}
