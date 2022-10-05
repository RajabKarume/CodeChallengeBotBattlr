// import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [myBots, setMyBots] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(()=>{
    fetch ("http://localhost:8002/bots")
    .then ((responce)=>responce.json())
    .then ((data)=>setBots(data))

  },[])

  const handleclick = (bot)=>{
    if (isClicked=== true){
       setMyBots([...myBots, bot])
    }else{
      
      const arr = myBots.filter((mybot) => mybot !== bot);
      setMyBots(arr)}
    
    setIsClicked(!isClicked)
  }
  
  console.log(myBots)
  return (
    <div>
      <YourBotArmy myBots={myBots} setMyBots={setMyBots} key={bots.id} />
      <BotCollection bots={bots} setBots={setBots} key={bots.id} handleclick={handleclick} />
    </div>
  )
}

export default BotsPage;
