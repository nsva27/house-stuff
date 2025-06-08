import './item.css'

export default function Item(props) {
  const {img, title, desc, price} = props.item;
  return (
    <div className="item">
      <div className="item__img">
        <img src={`./img/items/${img}`} />
      </div>
      <div className="item__info">
        <h2 className='item__title'>{title}</h2>
        <p className='item__desc'>{desc}</p>
        <p className='item__price'>{price}$</p>
        <button className='add-to-card' onClick={() => props.onAdd(props.item)}>+</button>
      </div>
    </div>
  )
}