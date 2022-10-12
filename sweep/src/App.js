// Imports
// import './App.css';
import Card from './cards';
// import react from 'react';

//App function
const App = () =>{
console.log('React app working?')
// function only returns one thing so all elements need to be wrapped inside one element.  
  
const data = [
  {
    Name     : "Jack",
    Address  : "8 Davidson Road",
    Phone    : "09968078759",
    Email    : "jackatstuff.bomb",
    Appliance: "woodburning stove",
    Brush    : "6inch",
    Guard    : "yes",
    History  : "15/06/2021 2 x sweep £120",
    Notes    : "stuff and things",

  },
  {
    Name     : "Bert",
    Address  : "78 Poppins Road",
    Phone    : "09968078759",
    Email    : "bertatstuff.bomb",
    Appliance: "Open Fire",
    Brush    : "24 inch",
    Guard    : "no",
    History  : "12/05/2021 - 1 x sweep £60",
    Notes    : "Dog called Stanley",

  },
];

return (
 
    <div>
      <h1>Customer Details</h1>
      {data.map((value,index)=>{
        return(
          <Card Name={value.Name} Address={value.Address} Phone={value.Phone} Email={value.Email} Appliance={value.Appliance}
                Brush={value.Brush} Guard={value.Guard} History={value.History} Notes={value.Notes}
          />
        );
      })}

      
    </div>
  );
}

export default App;
