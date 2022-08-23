import React from "react";
import AppUI from "./appUI";
import {TaskProvider} from "../context"
//import {Suspense, lazy} from 'react';
//const MainContainer = lazy(()=>import ('./containers/MainContainer'));


function App() {
  

  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export default App;
