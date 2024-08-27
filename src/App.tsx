import Navbar from './components/Navbar'
import GridItems from './components/GridItems'
import data from './content.json'
import './App.css'

function App() {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='page_wrapper'>
      <GridItems />
    </div>
    </>
  )
}

export default App
