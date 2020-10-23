import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  color: #282c34;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  height: 40px;
  line-height: 20px;
  padding: 0 0.5rem;

  &:focus {
    outline: none !important;
    border:1px solid #282c3491;
    box-shadow: 0 0px 5px #282c3491;
  }
`;