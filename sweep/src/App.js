// Imports
import './App.css';
import Card from './components/cards';
import './components/cards.css'
import Header from './components/header';
import './components/header.css';
import Receipt from './components/receipt';
import './components/receipt.css'
import React from 'react';
import Data from './Data'

//App function
const App = () =>{
console.log('React app working?')
// function only returns one thing so all elements need to be wrapped inside one element.  
  


return (
 
    <div className='body'>
      
      <div className='header'>
      
          <Header></Header>
        
      </div>


      <div >
      {/* <h1>Customer Details</h1> */}
      {Data.map((value,index)=>{
        return(
          <Card 
                key       = {value.key}
                Name      = {value.Name} 
                Address   = {value.Address} 
                Phone     = {value.Phone} 
                Email     = {value.Email} 
                Appliance = {value.Appliance}
                Brush     = {value.Brush} 
                Guard     = {value.Guard} 
                History   = {value.History} 
                Notes     = {value.Notes}
          />
        );
      })}
      </div>  

      <div className='receipt'>
      {Data.map((value,index)=>{
        return(
          <Receipt
                Name      = {value.Name} 
                Address   = {value.Address} 
                
          />
        );
      })}
        
      </div>
      
    </div>
  );
}

export default App;
