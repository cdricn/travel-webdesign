import data from '../content.json'
import './ListItems.css'

function ListItems() {
  return (
    <>
      {data.content.map((item, index) => (
        <li className='menu_item' key={index}>
          <div className='menu_title'>
            <h4>{item.title}</h4>
            <h4>{item.subTitle}</h4>
          </div>
        </li>
      ))}
    </>
  )
}

export default ListItems
