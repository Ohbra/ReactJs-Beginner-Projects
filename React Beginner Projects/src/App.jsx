import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './Components/accordion/Accordion'
import RandomColor from './Components/randomColor/randomColor'


function App() {

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Accorrdion Component */}
      {/* <Accordion/> */}

      {/* Random Color Component */}
      <RandomColor/>

    </>
  )
}

export default App
