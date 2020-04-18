import React, {useState} from 'react';
import PlayerForm from './playerForm';
import EnemyForm from './enemyForm';
import Merchant from './merchant';
import Nav from './../nav/index';


export default (props) =>{
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
        <PlayerForm player = {props.Player.player} />
        </div>
    );

}