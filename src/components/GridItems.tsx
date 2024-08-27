import image1 from '../assets/ItsukushimaShrine.jpg'

function GridItems() {
  const bgStyle = {
    backgroundImage: `url("${image1}")`,
  }

  return (
    <>
      <div className='grid_main'>
        <div className='grid_item' style={bgStyle}>
          <div className='item_title'>
            <h2>ITSUKUSHIMA SHRINE</h2>
            <h3>ITSUKUSHIMA</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridItems