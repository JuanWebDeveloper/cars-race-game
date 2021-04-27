import React, { useState } from "react";
import PodiumTable from "./PodiumTable";

import Ranking from "./Ranking";
let one = {};
let two = {};
let three = {};

const Podium = ({ dataForRanking, km }) => {
  const [SeeRanking, setSeeRanking] = useState(false);
  const [GoToRanking, setGoToRanking] = useState(false);

  const seePodium = () => {
    const TABLE = document.getElementById("table");
    const POSITION_ONE = document.getElementById("one");
    const POSITION_TWO = document.getElementById("two");
    const POSITION_THREE = document.getElementById("three");
    const TEXT = document.getElementById("text");

    TABLE.className = "row d-flex justify-content-center mt-4";

    for (let i = 0; i < 3; i++) {
      if (dataForRanking[i][4] === 1) {
        POSITION_ONE.innerHTML = `
            <td>${dataForRanking[i][0]}</td>
            <td>${dataForRanking[i][1]}</td>
            <td>${dataForRanking[i][2]}</td>
            <td>${dataForRanking[i][4]}</td>
            <td>${km}</td>
            `;
        one = {
          id: dataForRanking[i][0],
          name: dataForRanking[i][0],
          car: dataForRanking[i][1],
          lane: dataForRanking[i][2],
          position: dataForRanking[i][4],
          kilometers: km,
        };
      } else if (dataForRanking[i][4] === 2) {
        POSITION_TWO.innerHTML = `
            <td>${dataForRanking[i][0]}</td>
            <td>${dataForRanking[i][1]}</td>
            <td>${dataForRanking[i][2]}</td>
            <td>${dataForRanking[i][4]}</td>
            <td>${km}</td>
            `;
        two = {
          id: dataForRanking[i][0],
          name: dataForRanking[i][0],
          car: dataForRanking[i][1],
          lane: dataForRanking[i][2],
          position: dataForRanking[i][4],
          kilometers: km,
        };
      } else {
        POSITION_THREE.innerHTML = `
            <td>${dataForRanking[i][0]}</td>
            <td>${dataForRanking[i][1]}</td>
            <td>${dataForRanking[i][2]}</td>
            <td>${dataForRanking[i][4]}</td>
            <td>${km}</td>
            `;
        three = {
          id: dataForRanking[i][0],
          name: dataForRanking[i][0],
          car: dataForRanking[i][1],
          lane: dataForRanking[i][2],
          position: dataForRanking[i][4],
          kilometers: km,
        };
      }
    }

    setSeeRanking(true);
    TEXT.innerText = "¿Do you want to see the global ranking?";
  };

  const goToRanking = () => setGoToRanking(true);

  return (
    <React.Fragment>
      {GoToRanking ? (
        <Ranking one={one} two={two} three={three} />
      ) : (
        <PodiumTable
          SeeRanking={SeeRanking}
          goToRanking={goToRanking}
          seePodium={seePodium}
        />
      )}
    </React.Fragment>
  );
};

export default Podium;
