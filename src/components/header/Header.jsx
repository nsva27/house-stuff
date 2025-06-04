import './header.css'

export default function Header() {
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
          </nav>
      </div>
      {/* /header__wrapper */}
      <div className="presentation"></div>
    </header>
  )
}
