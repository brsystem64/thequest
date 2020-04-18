import React from 'react';


export default (props) => {
    return(
        <div class="row">
            <div className="card col l4 off-l4 off-s2 s8">
                <div className="card-info">
                <center>
                    <img  className="card-img" src={props.enemy.img}></img>
                </center>
                <label class="card-name"> {props.enemy.name} </label>
                    
                    <table>
                        <thead>
                            <tr>
                                <th className="life"><img src="./icons/attributes/life.png"/></th>
                                <th className="sword"><img src="./icons/attributes/sword.png"/></th>
                                <th className="shield"><img src="./icons/attributes/shield.png"/></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {props.enemy.hp}/{props.enemy.maxHp} </td>
                                <td> {props.enemy.atk} </td>
                                <td> {props.enemy.def} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <span>Inimigo {props.battle}/3</span>


        </div>

    );   
}


