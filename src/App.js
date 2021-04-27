import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Game from "./components/Game";

function App() {
  const [DataReady, setDataReady] = useState(false);
  const [PlayersData, setPlayersData] = useState([]);

  const checkingData = (dataCreated) => {
    setDataReady(true);
    setPlayersData(dataCreated);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {DataReady ? (
            <Route exact path="/">
              <Game PlayersData={PlayersData} />
            </Route>
          ) : (
            <Route exact path="/">
              <Form checkingData={checkingData} />
            </Route>
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
