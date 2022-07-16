import React, { useState } from 'react';
import './App.css';
import Card from './Card';
// import faker from 'faker'
function App() {
  const [showCard, setShowCard] = useState(true)
  const [name, setName] = useState("")
  var [cards, setCards] = useState([
    {
      id:'0',
      name: "Ananya Mohapatra",
      title: "Happy Kiddo",
      avatar: "https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=2000"
    }, {
      id:'1',
      name: "Ankit Maurya",
      title: "Silent kiddo",
      avatar: "https://mpng.subpng.com/20190628/yux/kisspng-shiba-inu-keychain-doge-t-shirt-dab-shiba-inu-dabbing-color-changing-mug-funny-doge-me-5d16d9c5939c90.0062293415617786296046.jpg"
    }, {
      id:'2',
      name: "Isharia Akhtar",
      title: "Funny kiddo",
      avatar: "https://m.media-amazon.com/images/I/81aCJakI4DL._SL1500_.jpg"
    }, {
      id:'3',
      name: "Akshay Kumar",
      title: "Spectacle kiddo",
      avatar: "https://w7.pngwing.com/pngs/223/620/png-transparent-glass-dog-rock-thumbnail.png"
    },
    {
      id:'4',
      name: "Aditya Gudu",
      title: "Smiling kiddo",
      avatar: "https://img.freepik.com/free-vector/cute-corgi-dog-playing-box-cartoon_138676-2307.jpg?w=360"
    }])

  const changeNameHandler = (name) => {
    console.log("Event", name)
  }
  const deleteHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)//splice(start, deleteCount)==>
    // It deletes the index,
    // reindexes the array and changes the length
    console.log("cardsCopy", cards_copy)
    console.log("cardsCopy1", cards)
    setCards(cards_copy)
  }
  const changeInputHandler = (event,id) => {
    console.log("abc",id);
   //1.Which card is modified
   const cardIndex=cards.findIndex(card=>card.id==id)
   //2.Make a copy of cards
  const cards_copy = [...cards]
   //3.Change the name of specific card
  cards_copy[cardIndex].name=event.target.value
   //4.Set the card with latest version of cards copy
   setCards(cards_copy)
  }
  const toggleShowCard = () => {
    setShowCard(!showCard);
  }
  
  var cardsMarkUp = showCard &&
    (cards.map((card, index) => <Card
      avatar={card.avatar}
      name={card.name}
      title={card.title}
      key={card.id}
      onDelete={() => deleteHandler(index)}
      onChangeName={changeNameHandler}
      onChangeInput={(event)=>changeInputHandler(event,card.id)}
    >
    </Card>))

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle Show/Hide</button>
      {cardsMarkUp}
    </div>
  )

}

export default App;
