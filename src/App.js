import React, { useState } from 'react';
import './App.css';
import Card from './Card';
// import faker from 'faker'
function App() {
  const [showCard,setShowCard]=useState(true)
  const [name,setName]=useState("")
  const [cards,setCards]=useState([
    {
    name:"Ananya Mohapatra",
    title:"Happy Kiddo",
    avatar:"https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=2000"
  },{
    name:"Ankit Maurya",
    title:"Silent kiddo",
    avatar:"https://mpng.subpng.com/20190628/yux/kisspng-shiba-inu-keychain-doge-t-shirt-dab-shiba-inu-dabbing-color-changing-mug-funny-doge-me-5d16d9c5939c90.0062293415617786296046.jpg"
  },{
    name:"Isharia Akhtar",
    title:"Funny kiddo",
    avatar:"https://m.media-amazon.com/images/I/81aCJakI4DL._SL1500_.jpg"
  },{
    name:"Akshay Kumar",
    title:"Spectacle kiddo",
    avatar:"https://w7.pngwing.com/pngs/223/620/png-transparent-glass-dog-rock-thumbnail.png"
  },
  {
    name:"Aditya Gudu",
    title:"Smiling kiddo",
    avatar:"https://img.freepik.com/free-vector/cute-corgi-dog-playing-box-cartoon_138676-2307.jpg?w=360"
  }])
 
  const changeNameHandler = (name) => {
    console.log("Event",name)
    // setName(name)
  }
  const deleteHandler=(i)=>{
  const cards_copy={...cards}
  console.log("cardsCopy",cards_copy)

    
  }
  const changeInputHandler=(event)=>{
    console.log("event",event.target.value)
  // setName(event.target.value)
  }
  const toggleShowCard=()=>{
    setShowCard(!showCard);
  }
  const cardsMarkUp=showCard &&
  (cards.map((card,index)=><Card
    avatar={card.avatar}
    name={card.name}
    title={card.title}
    onDelete={()=>deleteHandler(index)}
    onChangeName={changeNameHandler}
    onChangeInput={changeInputHandler}
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
