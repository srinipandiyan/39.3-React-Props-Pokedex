import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index containing player Pokemon cards  */

function Pokedex(props) {
    let winMessage = null;
    if (props.isWinner) {
        winMessage = <p className="Pokedex-winner">This hand wins!</p>
    }

    return (
        <div className="Pokedex">
          <h2 className="Pokedex-title">Pokedex</h2>
          <div className="Pokedex-cards">
            {props.pokemon.map(p => (<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>))}
          </div>
          <h3>Total experience: {props.exp}</h3>
          {winMessage}
        </div>
    );
}

export default Pokedex;