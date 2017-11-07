
import styled from 'styled-components';
const HoverCard = styled.div`
  background: #F8F8F8;
  margin: 10px 0;
  padding: 20px 10px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default HoverCard;
