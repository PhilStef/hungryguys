import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import LeafletMap from './leaflet';
import Inputs from './inputs';

function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Fetch data using axios
  //   axios.get('http://localhost:5000/api/data')
  //     .then(response => setData(response.data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <div class="square" className="p-4 max-w-5/7 h-full" id="map">
        <LeafletMap />
      </div>
      <div>
        <Inputs />
      </div>
      {/* <p>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}</p> */}
    </>
  )
}

export default App
