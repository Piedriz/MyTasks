import React from "react";
import {HashRouter, Route,Routes} from 'react-router-dom'
import { EditTaskPage } from "./EditTaskPage";
import HomePage from './HomePage'
import { NewTaskPage } from "./NewTaskPage";
function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/new' element={<NewTaskPage/>}/>
        <Route path='/edit/:id' element={<EditTaskPage/>}/>
        <Route path="*" element={<p>Page not found</p>}></Route>
      </Routes>
    </HashRouter>
  );
  
}

export default App;
