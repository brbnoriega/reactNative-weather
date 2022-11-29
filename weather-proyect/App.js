import React from "react";
import { NativeRouter,  Switch, Route } from "react-native";
import {Landing} from "./client/components/Landing/Landing";
import Home from "./client/components/Home/Home";
import Login from "./client/components/Login/Login";
import {Profile} from "./client/components/Profile/Profile";
import {EditProfile} from "./client/components/EditProfile/EditProfile";
import {Detail} from "./client/components/Detail/Detail";
import {ButtonGradient} from "./client/components/ButtonGradient/ButtonGradient";
import { render } from "react-dom";

function App() {
  
  return (
    //conocimiento del store le doy visibilidad a los componentes internos
    <NativeRouter>
      <Switch>
  
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />

       
      </Switch>
    </NativeRouter>

 
     
  //holi
  );
}

export default App;
