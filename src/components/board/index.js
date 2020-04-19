import React, {useState} from 'react';
import PlayerForm from './playerForm';
import EnemyForm from './enemyForm';
import Merchant from './merchant';
import Nav from './../nav/index';


export default (props) =>{


    function Dano(){
        
        let player = props.Player.player;
        let enemy  = props.Enemy.enemy;

        let enemyDamage = enemy.atk - player.def;
        let playerDamage = player.atk - enemy.def;
        return(
            <div className="row">
            <div className="col l2 off-l5 s12">
            <center>
                <span>{enemyDamage > 0 ? enemyDamage : 0}/
                    {playerDamage > 0 ? playerDamage : 0}
                </span>
            </center>
            </div>

            </div>
        );
    }

    if(props.Merchant.atMerchant){
        return(
            <>
            <Nav/>

            <Merchant Merchant= {props.Merchant} Player={props.Player}/>
            <PlayerForm player = {props.Player.player} />
            </>
          );
      }

    return(
        <div >
        <Nav/>
        <EnemyForm enemy = {props.Enemy.enemy} battle = {props.Battle.battleNumber}/>
        <Dano/>
        <PlayerForm player = {props.Player.player} />
        </div>
    );

}