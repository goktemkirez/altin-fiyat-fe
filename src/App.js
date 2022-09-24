import React from 'react';

import Sidenav from "./components/Sidenav"
import GoldPrice from "./pages/GoldPrice"

function App() {
  return (
    <>
      <Sidenav>
        <GoldPrice></GoldPrice>
      </Sidenav>
    </>
  );
}

export default App;
