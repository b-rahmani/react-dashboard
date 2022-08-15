import React,{ useEffect ,useContext} from 'react';
import {  Routes,Route,useLocation} from 'react-router-dom';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import SidebarDrawer from './components/sidebar/SidebarDrawer';

import Expenses from './pages/expenses/Expenses';

import { AppDataContext } from "./context/AppDataContext";
function App() {

  const location = useLocation();
  const [data, setData] = useContext(AppDataContext)

 

useEffect(() => {
  setData({ type: "closeDrawer" });
}, [location.pathname]); 
  return (
    
    <>
       
      <div className="App">
        
        <Sidebar />
        <SidebarDrawer/>

         <Expenses/>
      </div>
      



       <Routes>

        <Route path='/' >
          {/*<Route path="dashboard" element={<p>dashboard page</p>}/>*/}
          {/*<Route path="expenses"   element={ <Expenses/>}/>*/}
          {/*<Route   path="wallets" element={ <p>walllets page</p>}/>*/}

        </Route>
      </Routes> 
   
</>
    
  );
}

export default App;
