import React, { useEffect } from "react";

import firebase from "../firebase";
import "firebase/firestore";

const Ranking = ({ one, two, three }) => {
  const rankinFirst = firebase.firestore().collection("Ranking first");
  const rankinSecond = firebase.firestore().collection("Ranking second");
  const rankinThird = firebase.firestore().collection("Ranking third");
  rankinFirst.add(one);
  rankinSecond.add(two);
  rankinThird.add(three);

  const rankingOrderFirst = rankinFirst.orderBy("kilometers", "desc");
  const rankingOrderSecond = rankinSecond.orderBy("kilometers", "desc");
  const rankingOrderThird = rankinThird.orderBy("kilometers", "desc");

  const getReminders = async () => {
    const RANKINFIRST = await rankingOrderFirst.get();
    const RANKINSECOND = await rankingOrderSecond.get();
    const RANKINTHIRD = await rankingOrderThird.get();

    const FIRSTPLACE = document.getElementById("firstPlace");
    const SECONDPLACE = document.getElementById("secondPlace");
    const THIRDPLACE = document.getElementById("thirdPlace");

    RANKINFIRST.forEach((datum) => {
      FIRSTPLACE.innerHTML += `
        <tr>
          <td>${datum.data().name}</td>
          <td>${datum.data().car}</td>
          <td>${datum.data().lane}</td>
          <td>${datum.data().position}</td>
          <td>${datum.data().kilometers}</td>
         </tr>
        `;
    });

    RANKINSECOND.forEach((datum) => {
      SECONDPLACE.innerHTML += `
        <tr>
          <td>${datum.data().name}</td>
          <td>${datum.data().car}</td>
          <td>${datum.data().lane}</td>
          <td>${datum.data().position}</td>
          <td>${datum.data().kilometers}</td>
         </tr>
        `;
    });

    RANKINTHIRD.forEach((datum) => {
      THIRDPLACE.innerHTML += `
        <tr>
          <td>${datum.data().name}</td>
          <td>${datum.data().car}</td>
          <td>${datum.data().lane}</td>
          <td>${datum.data().position}</td>
          <td>${datum.data().kilometers}</td>
         </tr>
        `;
    });
  };

  useEffect(() => {
    getReminders();
  });

  return (
    <div className="container mt-4">
      <h2>First place winners</h2>
      <table className="table table-striped table-bordered mb-5">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Podium Position</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="firstPlace"></tbody>
      </table>

      <h2>Second place winners</h2>
      <table className="table table-striped table-bordered mb-5">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Podium Position</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="secondPlace"></tbody>
      </table>

      <h2>Third place winners</h2>
      <table className="table table-striped table-bordered">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Podium Position</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="thirdPlace"></tbody>
      </table>
    </div>
  );
};

export default Ranking;
