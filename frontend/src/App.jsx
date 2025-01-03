import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
       <Router>
        <Dashboard />
      </Router>
    </div>
    </>
  )
}

export default App
