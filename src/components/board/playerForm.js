import React from 'react';

export default (props) => {

    
    return(
        <div class="row">
            <div className="card col l4 off-l4 s12">
                <div className="card-info "> 
                        <label className="card-name"> Jogador </label>
                        
                        <span className="right">Lv:{props.player.lvl}</span>
                    <center>
                    <table>
                        <thead>
                            <tr>
                                <th className="life"><img src="./icons/attributes/life.png"/></th>
                                <th className="sword"><img src="./icons/attributes/sword.png"/></th>
                                <th className="shield"><img src="./icons/attributes/shield.png"/></th>
                                <th className="potion"><img src="./icons/attributes/potion.png"/></th>
                                <th className="gold"><img src="./icons/attributes/gold.png"/></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {props.player.hp}/{props.player.maxHp} </td>
                                <td> {props.player.atk} </td>
                                <td> {props.player.def} </td>
                                <td> {props.player.potion} </td>
                                <td> {props.player.gold} </td>
                            </tr>
                        </tbody>
                    </table>
                    </center>
                </div>
            </div>

        </div>

    );   
}