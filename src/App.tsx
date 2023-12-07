import React from 'react';
import './css/abstract/abstract.css'
import { Nav } from './PAGES/Nav/Nav';
import { Category } from './Components/Category/Category';
import { Home } from './PAGES/Home/Home';

function App() {

  return (
   <>
   <Nav/>
   <div className="mt-[50px]"></div>
 <Home/>
   </>

  );
}

export default App;
