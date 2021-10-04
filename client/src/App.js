import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Where from "./components/Where/Where";
import LoginTitlePage from "./components/LoginTitlePage/LoginTitlePage";
import Homepage from "./components/Homepage/Homepage";
import When from "./components/When/When";
import Who from "./components/Who/Who";
import What from "./components/What/What";
import Confirmation from "./components/Confirmation/Confirmation";
import Results from "./components/Results/Results";
import Meatymenu from "./Menus/Meatymenu";
import Vegmenu from "./Menus/Vegmenu";
import EmergencyServices from "./components/EmergencyServices/EmergencyServices";

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
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/meatymenu">
            <Meatymenu />
          </Route>
          <Route exact path="/vegmenu">
            <Vegmenu />
          </Route>
          <Route exact path="/emergencyservices">
            <EmergencyServices />
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
