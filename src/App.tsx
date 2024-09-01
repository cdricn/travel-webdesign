import Navbar from './components/Navbar'
import GridItems from './components/GridItems'
import './App.css'

function App() {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='page_wrapper'>
      <ul className='grid_main'>
        <GridItems />
      </ul>
    </div>
    </>
  )
}

export default App
