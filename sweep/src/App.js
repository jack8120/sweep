// Imports

import React from 'react';
import Header from './components/header';
import Card from './components/card';
import NewCustomerForm from './components/newCustomerForm';
import CustomerTable from './components/CustomerTable';
import Receipt from './components/receipt';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

//App function
const App = () =>{


    const [data,setData] = useState([]);


    useEffect(()=>{

            const reqAPI = 'https://sweep-api.netlify.app/.netlify/functions/api/customers/read';

            axios.get(reqAPI).then((res)=>{
                setData(res.data);
                console.log(res)
            }).catch((err)=>{
                console.log(err);
            });
    },[]);


   const cards = data.map(item => {
        return (
          <Card
              key={item._id}
              item={item}
              />
              
        )
    })

    const receipt = data.map(item => {
        return (
          <Receipt
              key={item._id}
              item={item}
              />
              
        )
    })

    const dataFromChildHandler = (args) =>{
        console.log("Child data",args);

        setData(args);
    }


return (
 
    <div className='main'>
        
        
        <Header className="header"/>

        <section className='content'>
            <div className='herocontainer'>
            <img className='heroimg' src={require("./images/rooftops.jpg")} alt="rooftops"/>
            
            <i class="fa-solid fa-arrow-down"></i>
            </div>
      
           <div>
                <NewCustomerForm 
                handler = {dataFromChildHandler}  />
           </div>

           <div>
            <h1 className='custdatbasetitle'>Customer Database</h1>
           <CustomerTable
              
              item={data}
              />
           </div>
           
          
           <div>
           <img className='van' src={require("./images/whitevan.png")} alt="rooftops"/>
              {cards}
           </div>
           <div>
              {receipt}
           </div>
        
            
       
                
        </section>

   
      
    </div>
  )
}

export default App;
