import React from 'react';

import GlobalStyle from './styles/global';
import SingIN from './pages/SingIN';
import SingUP from './pages/SingUP';

const App: React.FC = () => {
  return (
    <>
      <SingUP />
      <GlobalStyle />
    </>
  );
};

export default App;
