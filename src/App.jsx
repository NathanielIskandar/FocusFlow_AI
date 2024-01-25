import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const socket = io('http://localhost:5000');

function App() {
  const [frame, setFrame] = useState('');

  useEffect(() => {
    socket.on('frame', data => {
      setFrame(data.data);
    });
  }, []);

  return (
    <div className="App">
      <img src={`data:image/jpeg;base64,${frame}`} alt="Video frame" />
    </div>
  );
}


export default App
