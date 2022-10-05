import React from "react";
import { useState, useEffect } from "react";
import BotCard from "./BotCard";
// import BotSpecs from "./BotSpecs"
// import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, setBots, handleclick }) {
    function deleteBot(deletedBot){
      const updatedBot = bots.filter((bot)=>(
        bot.id !== deletedBot.id
      ))
      setBots(updatedBot)
    }
    return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot)=>(
            < BotCard 
            bot ={bot} 
            key = {bot.id}
            handleclick={handleclick}
            deleteBot={deleteBot}
            id={bot.id}
            />
        
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
