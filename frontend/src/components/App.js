import "../styles/style.css";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([])
    
  useEffect(() => { 
    fetch("http://localhost:8080/user/api")
    .then((res) => res.json())
    .then((data) => setUser(data));
  }, [])

  console.log(user);

  return (
    <div className='App'>
      <header className='App-header text-red-500'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
