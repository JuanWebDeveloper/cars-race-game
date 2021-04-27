import React from "react";

const PodiumTable = ({ SeeRanking, goToRanking, seePodium }) => {
  return (
    <div className="container">
      <div className="see-podium mt-5">
        <h2 id="text">Congratulations it was a great race</h2>
        {SeeRanking ? (
          <button className="btn btn-primary btn-see" onClick={goToRanking}>
            Go To Ranking
          </button>
        ) : (
          <button className="btn btn-primary btn-see" onClick={seePodium}>
            See Podium
          </button>
        )}
      </div>
      <div className="d-none" id="table">
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
          <tbody>
            <tr id="one"></tr>
            <tr id="two"></tr>
            <tr id="three"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodiumTable;
