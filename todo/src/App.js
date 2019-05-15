import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import SavedList from './components/SavedList';

function App() {
  return (
    <div className="App">
      <ToDoList />
      <SavedList />
    </div>
  );
}

export default App;
