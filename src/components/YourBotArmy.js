import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBots, setMyBots }) {
  //your bot army code here...
  console.log(myBots)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myBots.map(mybot=>(
            <BotCard bot={mybot} key={mybot.id} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
