import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBots, setMyBots }) {
  // const [isClicked, setIsClicked] = useState(true)

  console.log(myBots)
  function handleRemove(myBotRemoved){
    const removeArr = myBots.filter((myBot)=> myBot.id !== myBotRemoved.id)
    setMyBots(removeArr)
  }
  
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myBots.map(mybot=>(
            <BotCard bot={mybot} key={mybot.id} handleclick={handleRemove}  />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
