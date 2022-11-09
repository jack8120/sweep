// Imports

import React from 'react';
import Header from './components/header';
import Card from './components/card';
import NewCustomerForm from './components/newCustomerForm';
import CustomerTable from './components/CustomerTable';
import Receipt from './components/receipt';
import { useEffect,useState } from 'react';
import axios from 'axios';

//App function
const App = () =>{


    const [data,setData] = useState([]);


    useEffect(()=>{

            const reqAPI = 'http://localhost:4000/customers/read';

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


return (
 
    <div className='main'>
        
        
        <Header className="header"/>


                <h1>Calendar?</h1>
        <section className='content'>
        <h1> Office Office Office Office Office Office  </h1>
           <div>
                <NewCustomerForm />
           </div>
           <div>
           <CustomerTable
              item={data}
              />
           </div>
          
           <div>
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
