import React, {useState} from 'react';



export default (props) =>{


    return(
    <>
        <center>
            <img width="400px" src="./logo.png" alt="https://logomakr.com/7t1Wtp"></img>
        </center>
        <div className="row">                    
            <div className="col l4 off-l4 s12">
                <center>
                    <button onClick={() => props.started(true)}> Iniciar Jogo </button>
                </center>
            </div>
        </div>

        <div className="row">
            <div className="col l4 off-l4 s12">
                <strong> Regras </strong>
                <table>
                    <tr>
                    <td className="life"><img src="./icons/attributes/life.png"/></td>
                    <td className="left"> <span>HP, sua vida.</span></td>
                    </tr>
                    <tr>
                    <td className="sword"><img src="./icons/attributes/sword.png"/></td>
                    <td className="left"> <span>Ataque, sua força.</span></td>
                    </tr>
                    <tr>
                    <td className="shield"><img src="./icons/attributes/shield.png"/></td>
                    <td className="left"> <span>Defesa, sua proteção.</span></td>
                    </tr>
                    <tr>
                    <td className="potion"><img src="./icons/attributes/potion.png"/></td>
                    <td className="left"> <span>Poção, sua regeneração.</span></td>
                    </tr>
                    <tr>
                    <td className="gold"><img src="./icons/attributes/gold.png"/></td>
                    <td className="left"> <span>Gold, sua riqueza.</span></td>
                    </tr>
                </table>

                <br/>
                <span>° 3 Batalhas = 1 Level</span>
                <br/>
                <span>° HP = 0? morte.</span>
                <br/>
                <span>° Fugir da batalha? O custo é o dano inimigo.</span>
                <br/>
                <span>° The Quest é um RPG de turno. O inimigo sempre joga após o seu ataque ou fuga.</span>
            </div>
        </div>     
    </>
    );
}
