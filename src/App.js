import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
      <>                
        
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
      </>    
  );
}

export default App;
