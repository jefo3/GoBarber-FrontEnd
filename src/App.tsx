import React from 'react';

import GlobalStyle from './styles/global';
import SingIN from './pages/SingIN';

const App: React.FC = () => {
  return (
    <>
      <SingIN />
      <GlobalStyle />
    </>
  );
};

export default App;
