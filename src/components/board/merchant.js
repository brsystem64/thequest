import React from 'react';



export default (props) =>{
    
    let player = props.Player.player;
    
    function cannotBuyMessage(){
        alert('Gold insuficiente!');
    }
    function upAttack(){
        if(hasGold()){
            props.Player.setPlayer({...player,atk:player.atk+1, gold:player.gold-1});
        }else{
            cannotBuyMessage();
        }
    }
    function upDefense(){
        if(hasGold()){
            props.Player.setPlayer({...player,def:player.def+1, gold:player.gold-1});
        }else{
            cannotBuyMessage();
        }
    }
    function upHp(){
        if(hasGold()){
            if(player.hp == player.maxHp){
                props.Player.setPlayer({...player,maxHp:player.maxHp+1, hp: player.maxHp+1, gold:player.gold-1});
            }else{
                props.Player.setPlayer({...player,maxHp:player.maxHp+1, gold:player.gold-1});
            }
        }else{
            cannotBuyMessage();
        }
    }
    function buyPotion(){
        if(hasGold()){
            props.Player.setPlayer({...player,potion:player.potion+1, gold:player.gold-1});
        }else{
            cannotBuyMessage();
        }
    }
    function hasGold(){
        return player.gold > 0 ? true : false;
    }

    return(
        <>
        <div class="row">
            <div className="col l4 off-l4 s12">
                <h4> Bem vindo ao mercado!</h4>
                <span> Todos os itens custam 1 gold.</span>
            </div>
        </div>
        <div className="row">
        <div className="col l4 off-l4 s12">
            <center>
                <button onClick = {() => buyPotion()}> Comprar Poção  </button>
                <button onClick = {() => upHp()}> Melhorar Vida </button>
                <button onClick = {() => upAttack()}> Melhorar Ataque </button>
                <button onClick = {() => upDefense()}> Melhorar Defesa </button>
                <p/>
                <button onClick={() => props.Merchant.setAtMerchant(false)}> Voltar</button>
            </center>
        </div>
        </div>
        </>
    );

}