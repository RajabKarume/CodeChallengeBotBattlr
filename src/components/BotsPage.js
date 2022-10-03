// import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [myBots, setMyBots] = useState([])

  useEffect(()=>{
    fetch ("http://localhost:8002/bots")
    .then ((responce)=>responce.json())
    .then ((data)=>setBots(data))

  },[])

  const handleclick = (bot)=>{
    setMyBots([...myBots, bot])
  }
  const handlechange = (bot)=>{
    const newArr = myBots
    setMyBots([...newArr])
  }
  console.log(myBots)
  return (
    <div>
      <YourBotArmy myBots={myBots} setMyBots={setMyBots} key={bots.id} handlechange={handlechange} />
      <BotCollection bots={bots} setBots={setBots} key={bots.id} handleclick={handleclick} />
    </div>
  )
}

export default BotsPage;
