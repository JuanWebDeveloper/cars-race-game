import React, { useState } from "react";

const PLAYERS_DATA = [];

class GameSettings {
  constructor(name, car) {
    this.name = name;
    this.car = car;
  }

  dataPlayer(amount) {
    for (let i = 0; i < amount; i++) {
      let player = document.getElementById(`player${i + 1}`).value;
      let car = document.getElementById(`car${i + 1}`).value;

      PLAYERS_DATA.push(...[new GameSettings(player, car)]);
    }
  }
}

const Form = ({ checkingData }) => {
  const [DataFilled, setDataFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const NUMBER_PLAYERS = document.getElementById("numberPlayers").value;
    const KILOMETERS_TRACK = document.getElementById("kilometersTrack").value;
    PLAYERS_DATA.push(KILOMETERS_TRACK);
    const NAME_AND_CART = document.getElementById("nameAndCart");

    for (let i = 0; i < NUMBER_PLAYERS; i++) {
      NAME_AND_CART.innerHTML += `   
      <div class="form-group">
        <input
          type="text"
          name="name"
          id="player${i + 1}"
          class="form-control mb-1"
          placeholder="Name of player ${i + 1}"
          required
        />
        <input
          type="text"
          name="car"
          id="car${i + 1}"
          class="form-control"
          placeholder="Player cart"
          required
        />
      </div>
    `;
    }

    setDataFilled(true);
  };

  const handleClick = () => {
    const PLAYERS = new GameSettings();
    const NUMBER_PLAYERS = document.getElementById("numberPlayers").value;
    const NAME_AND_CART = document.getElementById("nameAndCart");
    const FORM = document.getElementById("form");

    PLAYERS.dataPlayer(NUMBER_PLAYERS);
    FORM.reset();
    NAME_AND_CART.innerHTML = "";
    setDataFilled(false);
    checkingData(PLAYERS_DATA);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <form className="card col-6 mt-4 p-2" id="form" onSubmit={handleSubmit}>
          <div className="card-header bg-primary text-center text-white">
            Add Players
          </div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="number"
                min="3"
                className="form-control"
                id="numberPlayers"
                placeholder="Number of players"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="kilometersTrack"
                placeholder="Kilometers of the track"
                required
              />
            </div>
            <div id="nameAndCart"></div>
          </div>

          {DataFilled ? (
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              Start Game
            </button>
          ) : (
            <button type="submit" className="btn btn-primary btn-block">
              Following
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
