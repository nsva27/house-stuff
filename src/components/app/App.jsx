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
          img: 'chair.png',
          title: 'Стул',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia error eius sit quae modi.',
          category: 'chairs',
          price: '44.99',
        },
        {
          id: 2,
          img: 'sofa.png',
          title: 'Диван',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'sofa',
          price: '180.99',
        },
        {
          id: 3,
          img: 'table.png',
          title: 'Стол',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia error eius sit quae modi.',
          category: 'tables',
          price: '52.99',
        },
        {
          id: 4,
          img: 'lamp.png',
          title: 'Лампа',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'lamps',
          price: '14.99',
        },
        {
          id: 5,
          img: 'chandelier.png',
          title: 'Люстра',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chandelier',
          price: '20.99',
        },
      ],
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>  
    )
  }
}

export default App