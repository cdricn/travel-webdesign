import Navbar from './components/Navbar'
import ListItems from './components/ListItems'
import GridItems from './components/GridItems'
import './App.css'

function App() {
  return (
    <>
    <div className='navbar-space'>
      <Navbar />
    </div>
    <div className='page_wrapper'>
      <div id='dropdown_container'>
        <div className='dropdown_title'><h1>LIST</h1></div>
        <ul className='dropdown_content'>
          <ListItems />
        </ul>
      </div>
      <ul className='grid_main'>
        <GridItems />
      </ul>
    </div>
    </>
  )
}

export default App
