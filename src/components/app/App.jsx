import { Component } from "react"
import Header from "../header/Header"
import Items from "../items/Items"
import Footer from "../footer/Footer"
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          img: 'chair.jpg',
          title: 'Стул',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia error eius sit quae modi.',
          category: 'chairs',
          price: '44.99',
        },
        {
          id: 2,
          img: 'sofa.jpg',
          title: 'Диван',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'sofa',
          price: '180.99',
        },
        {
          id: 3,
          img: 'table.jpg',
          title: 'Стол',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia error eius sit quae modi.',
          category: 'tables',
          price: '52.99',
        },
        {
          id: 4,
          img: 'lamp.jpg',
          title: 'Лампа',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'lamps',
          price: '14.99',
        },
        {
          id: 5,
          img: 'chandelier.jpg',
          title: 'Люстра',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chandelier',
          price: '20.99',
        },
      ],
      orders: [],
    }
  }

  addToOrder = (item) => {
    this.setState({orders: [...this.state.orders, item]})
  }

  render() {
    const {orders, items} = this.state;
    return (
      <div className="container">
        <Header orders={orders} />
        <Items onAdd={this.addToOrder} items={items} />
        <Footer />
      </div>  
    )
  }
}

export default App