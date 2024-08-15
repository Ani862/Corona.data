import { useEffect, useState } from 'react';
import './App.css';
import useCoronaData from './useCoronaData';

function App() {

  const [value, setValue ] =useState("");

  const data = useCoronaData(value);

   let confirmed = "";
  if(data !== undefined){
    confirmed = data.data.latest_data.confirmed

  }

  return (
    <div className="App">
      <h1>COVID 19 Deaths by Country</h1>
      <input type="text"
             value={value}
             placeholder="Enter country code"
             onChange={(e)=>{
              setValue(e.target.value)
             }}
      />
      <h2>{confirmed}</h2>
    </div>
  );
}

export default App;
