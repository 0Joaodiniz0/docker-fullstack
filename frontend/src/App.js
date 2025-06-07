import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => setTime(data[0].now))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Backend Time:</h1>
      <p>{time}</p>
    </div>
  );
}

export default App;
