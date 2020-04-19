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
                <img width="400px" src="./tutorial.png"></img>
                <strong>Regras</strong>
                <hr/>
                <strong>Batalhar:</strong>
                <span>
                    o valor de dano é subtraido da vida do jogador e dá criatura.
                </span>
                <p/>
                <strong>Fugir:</strong>
                <span>
                    Inimigo é alterado, porém jogador leva o dano inimigo.
                    Exceto quando o dano inimigo é 0.
                </span>   
                <p/>
                <strong>Usar Poção:</strong>
                <span>
                   Recupera até 3 pontos de Vida.
                </span>    
                <hr/>         
            </div>
        </div>   

        <div className="row">

            <center>
            <span>Git @BRSystem64</span>
            <br/>
            <span>Os icones usados podem ser encontrados em  </span>
            <a href="https://game-icons.net">games-icons.net</a> 
            </center>
        </div>  
    </>
    );
}
