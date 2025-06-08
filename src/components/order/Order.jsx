export default function Order(props) {
  const {img, title, price} = props;

    return (
      <div className="item">
        <div className="item__img">
         <img src={`./img/items/${img}`} />
        </div>
        <div className="item__info">
          <h2 className='item__title'>{title}</h2>
          <p className='item__price'>{price}$</p>
        </div>
      </div>
    )
}
