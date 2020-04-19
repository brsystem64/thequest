import React, {useState} from 'react';

// Components do Jogo
import Nav from './components/nav';
import Board from './components/board';
import Principal from './components';
import {isDead, attack, run, isEndGame, getPotions, enemyGenerator} from './helper/actionsHelper';
import Player from './data/player'; // Atributos do jogador
import data from './data/enemies'; // Atributos de todas criaturas do game
  
import './global.css';


function Game(){

const [started, setStarted] = useState(false);  
const [atMerchant, setAtMerchant]  = useState(false);
const [battleNumber, setBattleNumber]  = useState(1);
const [player, setPlayer] = useState(Player);
const [enemy, setEnemy] = useState(enemyGenerator(player, data));
    



function handlePotion(){
  if(player.potion > 0 && player.hp < player.maxHp){
    getPotions(player, setPlayer);
  }
  else{
    alert('Sua Hp está no máximo ou você está sem poção!');
  }
}


function handleRun(){
  run(player, enemy, setPlayer); 
  setEnemy(enemyGenerator(player, data));
  setStarted(!isEndGame(player));
}
  
  

function handleBattle(){
  attack(player, enemy, setEnemy);
  if(isDead(enemy)){
    updateDataBattle();
    setEnemy(enemyGenerator(player, data));        
  }else{
    attack(enemy, player, setPlayer);
  }
  setStarted(!isEndGame(player));
}

function updateDataBattle(){
  if(battleNumber == 3){
    setBattleNumber(1);
    setPlayer({...player, lvl:player.lvl+1, gold:player.gold+3});
    setAtMerchant(true);
  }else{
    setBattleNumber(battleNumber+1);
  }
}
 

if(!started){
  if(player.hp <= 0){
    alert('Você morreu!');
    window.location.reload();
  }
  return(  
      <Principal started= {setStarted}/>
  );
}

if(atMerchant){
  return(
    <Board 
    Enemy={{enemy, setEnemy}} 
    Player = {{player, setPlayer}} 
    Battle={{battleNumber, setBattleNumber}}        
    Merchant ={{atMerchant, setAtMerchant}}
    />
    
    );
}

return (
  <>
  <Board 
    Enemy={{enemy, setEnemy}}     
    Player = {{player, setPlayer}}      
    Battle={{battleNumber, setBattleNumber}}      
    Merchant ={{atMerchant, setAtMerchant}}
  />
  <div className="row ">
    <div className="col l4 off-l4 s12">
    <center>
      <button onClick={handleBattle}> Batalhar </button>
      <button onClick={handleRun}> Fugir </button>
      <button onClick={handlePotion}> Usar Poção </button>
    </center>
    </div>
  </div>
  </>
);
}



export default () => {

  return (
    <div className="container">
      <Game />
    </div>
  );
}
