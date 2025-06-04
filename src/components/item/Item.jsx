import './item.css'

export default function Item(props) {

  return (
    <div className="item">
      <img src={`./img/items/${props.item.img}`} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <p>{props.item.price}$</p>
      <button className='add-to-card'>+</button>
    </div>
  )
}