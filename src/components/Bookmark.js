import React from "react";

const Bookmark = ({ GameOn, careerStarted, startGame }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-4">
        <div className="card col-12 p-2">
          <div className="card-header bg-primary">
            <h3 className="text-center text-white" id="header">
              ¿Are You Ready?
            </h3>
          </div>

          <div className="card-body" id="bookmark"></div>

          <div className="card-footer start-game d-flex justify-content-center">
            {GameOn ? (
              <button className="btn btn-primary" onClick={careerStarted}>
                Throw Dice{" "}
                <span className="font-weight-bold" id="launchNumber"></span>
              </button>
            ) : (
              <button className="btn btn-primary" onClick={startGame}>
                Start Game
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
