import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  background: #282c34;
  border: 1px solid #282c34;
  border-radius: 3px;
  color: #ffffff;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 800;
  height: 40px;
  min-width: 150px;
  padding: 0.5rem 1rem;

  &:hover {
    background: #282c34f1;
    cursor: pointer;
  }

  &:focus {
    background: #282c34;
  }
`;