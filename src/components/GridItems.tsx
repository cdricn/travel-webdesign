import data from '../content.json'
import './GridItems.css'

function GridItems() {

  return (
    <>
      {data.content.map((item, index) => (
        <li className='grid_item' key={index} style={
          {
            backgroundImage: `url("/${item.image}")`,
            backgroundPosition: `50% ${item.offset}%`
          }}>
          <div className='item_title_container'>
          <h2 className='item_title'>{item.title}</h2>
          <h3 className='item_subtitle'>{item.subTitle}</h3>  
          </div>
        </li>
      ))}
    </>
  )
}

export default GridItems