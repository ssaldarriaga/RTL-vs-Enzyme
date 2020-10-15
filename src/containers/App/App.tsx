import React from 'react';

// Assets
import logo from '../../assets/logo.svg';

// Styled components
import { AppContainer, AppLogo, Header } from './styles';

function App() {
  return (
    <AppContainer>
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </Header>
    </AppContainer>
  );
}

export default App;
