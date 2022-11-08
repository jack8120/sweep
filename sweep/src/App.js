// Imports

import React from 'react';
import Header from './components/header';
import Card from './components/card';
import NewCustomerForm from './components/newCustomerForm';
import CustomerTable from './components/CustomerTable';


// import Receipt from './components/receipt';


import Data from './data'


//App function
const App = () =>{


    const cards = Data.map(item => {
        return (
          <Card
              key={item.id}
              item={item}
              />
              
        )
    })

    const table = Data.map(item => {
        return (
          <CustomerTable
              key={item.id}
              item={item}
              />
              
        )
    })
  


return (
 
    <div className='main'>
        <Header className="header"/>

        <section className='content'>
            <div>
              {cards}
           </div>
        </section>
        <section>
            <NewCustomerForm />
        </section>
        <section>
                {table}
        </section>

   
      
    </div>
  )
}

export default App;
