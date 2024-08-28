import data from '../content.json'

function GridItems() {

  return (
    <>
      {data.content.map((item, index) => (
        <div className='grid_item' key={index} style={
          {
            backgroundImage: `url("/${item.image}")`,
            backgroundPosition: `50% ${item.offset}%`
          }}>
          <div className='item_title'>
            <h2>{item.title}</h2>
            <h3>{item.subTitle}</h3>  
          </div>
        </div>
      ))}
    </>
  )
}

export default GridItems