// Imports

import React from 'react';

import Card from './components/card';
import Header from './components/header';
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
  


return (
 
    <div className='main'>
        <Header className="header"/>
        <section className='cardDisplay'>
            {cards}
        </section>
   
      
    </div>
  )
}

export default App;
