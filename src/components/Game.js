import React, { useState } from "react";

import Bookmark from "./Bookmark";
import Podium from "./Podium";

let dataForRanking = [];
let km = "";

class Playing {
  assigningData(dataBrought) {
    let kmToM = (dataBrought[0] * 1000) / 1.0;
    km = dataBrought[0];
    dataBrought.shift();

    for (let i = 0; i < dataBrought.length; i++) {
      dataForRanking.push([
        dataBrought[i].name,
        dataBrought[i].car,
        i + 1,
        kmToM,
      ]);
    }
  }

  bookmark(bookmarkData) {
    const BOOKMARK = document.getElementById("bookmark");

    for (let i = 0; i < bookmarkData.length; i++) {
      BOOKMARK.innerHTML += `
        <h3 class="text-center text-secondary border border-primary mb-3 p-2">
          <span class="text-primary">Player:</span> ${bookmarkData[i][0]}
          <span class="text-primary">Car:</span> ${bookmarkData[i][1]}
          <span class="text-primary">Lane:</span> ${bookmarkData[i][2]}
          <span class="text-primary">Meters To Run:</span> ${bookmarkData[i][3]}
        </h3>
      `;
    }
  }

  throwDice() {
    const THREW = 1 + Math.floor(Math.random() * 6);
    document.getElementById("launchNumber").innerText = THREW;
    return THREW;
  }

  showShift(bookmarkData, turn) {
    const HEADER = document.getElementById("header");
    HEADER.innerText = `Player Turn: ${bookmarkData[turn][0]}`;
  }

  assignShifts(bookmarkData, turn, podium) {
    const BOOKMARK = document.getElementById("bookmark");
    const THREW = this.throwDice();
    let next = [];

    if (bookmarkData[turn][4] >= 1) {
      next = [bookmarkData, ++turn, false];
      return next;
    }

    bookmarkData[turn][3] -= THREW * 100;

    if (bookmarkData[turn][3] > 0) {
      next = [bookmarkData, ++turn, false];
    } else {
      bookmarkData[turn][3] = 0;
      bookmarkData[turn].push(podium + 1);
      next = [bookmarkData, ++turn, true];
    }

    BOOKMARK.innerHTML = "";
    this.bookmark(bookmarkData);
    return next;
  }
}

const Game = ({ PlayersData }) => {
  const [GameOn, setGameOn] = useState(false);
  const [Turn, setTurn] = useState(0);
  const [WinnersPodium, setWinnersPodium] = useState(0);
  const PLAYING = new Playing();

  const startGame = () => {
    setGameOn(true);
    PLAYING.assigningData(PlayersData);
    PLAYING.bookmark(dataForRanking);
    PLAYING.showShift(dataForRanking, Turn);
  };

  const careerStarted = () => {
    let nextShift = PLAYING.assignShifts(dataForRanking, Turn, WinnersPodium);
    dataForRanking = nextShift[0];

    if (nextShift[1] >= dataForRanking.length) {
      nextShift[1] = 0;
    }

    if (nextShift[2]) {
      setWinnersPodium(WinnersPodium + 1);
    }

    setTurn(nextShift[1]);
    PLAYING.showShift(dataForRanking, nextShift[1]);
  };

  return (
    <React.Fragment>
      {WinnersPodium >= 3 ? (
        <Podium dataForRanking={dataForRanking} km={km} />
      ) : (
        <Bookmark
          GameOn={GameOn}
          startGame={startGame}
          careerStarted={careerStarted}
        />
      )}
    </React.Fragment>
  );
};

export default Game;
