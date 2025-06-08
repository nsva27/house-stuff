import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6"
import Order from "../order/order";
import './header.css'

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);
  const {orders} = props;

  return (
    <header className="header">
      <div className="header__wrapper">
        <span className="logo">House Staff</span>
          <nav className="nav">
            <ul className="nav__list">
              <a href="#"><li>О нас</li></a>
              <a href="#"><li>Контакты</li></a>
              <a href="#"><li>Кабинет</li></a>
            </ul>
            <FaCartShopping 
              onClick={() => setCardOpen(cardOpen = !cardOpen)} 
              className={`shop-card-button ${cardOpen && 'active'}`} />
          </nav>
          {cardOpen && (
            <div className="shop-card" >
              {orders.map(item => (
                <Order key={item.id} item={item} />
              ))}
            </div>
          )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
