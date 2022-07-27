import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : '#fff'};
  color: ${(props) =>
    props.color ? props.color : 'rgba(19, 34, 72, 1)'};
  border-radius: 0.3rem;
  border: none;
  padding: 0.5rem 1rem;
  width: ${(props) => (props.width ? props.width : '')};
`;
