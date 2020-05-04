import React from 'react';
import Menu from './components/Menu'
import FormReminder from './components/FormReminder'
import Reminders from './components/Reminders'

function App() {

  return (
    <div id="root">
      <div className="main">
        <Menu />
        <FormReminder />
        <Reminders />
      </div>
    </div>
  );
}

export default App;