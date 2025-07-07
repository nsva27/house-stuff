import { FaTrash } from "react-icons/fa6"
import './order.css'

export default function Order(props) {
  const {img, title, price, id} = props.item;

    return (
      <div className="item">
        <div className="item__wrapper">
          <div className="item__img">
            <img src={`./img/items/${img}`} />
          </div>
          <div className="item__info">
            <h2 className='item__title'>{title}</h2>
            <p className='item__price'>{price}$</p>
          </div>
        </div>
        <FaTrash className="delete-item" onClick={() => props.onDelete(id)} />
      </div>
    )
}