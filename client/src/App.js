import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Where from "./components/Where/Where";
import LoginTitlePage from "./components/LoginTitlePage/LoginTitlePage";
import Homepage from "./components/Homepage/Homepage";
import When from "./components/When/When";
import Who from "./components/Who/Who";
import What from "./components/What/What";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/">
            <LoginTitlePage />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/where">
            <Where />
          </Route>
          <Route exact path="/when">
            <When />
          </Route>
          <Route exact path="/who">
            <Who />
          </Route>
          <Route exact path="/what">
            <What />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.div`
  max-height: 1136px;
  max-width: 640px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
export default App;
