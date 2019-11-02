import React from 'react';
import logo from './logo.svg';
import './App.css';
import RileyList from './components/riley-list';
 


const data = {
  status: "success",
  message: "the click was successful",
  info: "Info for the table",
  theVal : ["one","nine","ten","eleven", "fifteen"]
}


function App() {
  return (
  
      <div className="App">
 


            { <RileyList data={data}></RileyList> }
         
      </div>
    
  );
}

export default App;
