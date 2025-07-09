import React, { useEffect, useState } from 'react';
import { Card } from './components/t';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  const API_URL = 'http://127.0.0.1:5000';

  const fetchClients = async () => {
    try{
      const response = await axios.get(`${API_URL}/clients`);
      setData(Array.isArray(response.data.clients) && response.data.clients);
    }catch(err){
      console.log("Error while attempting to fetch data using axios: \n" + err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          {
            data.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))
          }
      </header>
    </div>
  );
}

export default App; 