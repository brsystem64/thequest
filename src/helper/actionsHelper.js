

function enemyGenerator(player, data){
  let {name, atk, def, hp, img} =  data[Math.floor (Math.random() * data.length)];

  let points = player.lvl * 3 - 3;
  let bonus = [];
  bonus.push(Math.floor(Math.random() * points));
  bonus.push(Math.floor(Math.random() * (points - bonus[0])));
  bonus.push(points - bonus[0] - bonus[1]);

  atk += bonus.shift();
  def += bonus.shift();
  hp  += bonus.shift();

  return {name, atk, def, hp, maxHp:hp, img};
}


function attack(attacker, defender, callback){
    let damage = attacker.atk -  defender.def ;
    if(damage >= 0){
        defender.hp -= damage;
        callback({...defender});
    }
} 

function getPotions(player, callback){
  let newHp = player.hp + 3;
  newHp = newHp > player.maxHp ? player.maxHp : newHp;
  callback({...player, hp:newHp, potion:player.potion-1});
}

function isDead(creature){
    return creature.hp <= 0 ? true : false;
}

function run(player, enemy, callback){
  attack(enemy, player, callback);
}
  
function isEndGame(player){
  return isDead(player);
};

module.exports ={
   attack, 
   isDead, 
   run, 
   isEndGame, 
   getPotions,
   enemyGenerator
}
