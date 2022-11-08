import "./ctable.css"
import React, { useState, useEffect } from "react";

const CustomerTable = (props) => {
  return(

    const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://localhost:3000/customers/read");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App"></div>
  );



   
        // <div className="table">
        //   <table>
        //     <tbody>
        //     <tr>
        //       <th>firstName</th>
        //       <th>lastName</th>
        //       <th>houseName</th>
        //       <th>houseNumber</th>
        //       <th>street</th>
        //       <th>city</th>
        //       <th>postCode</th>
        //       <th>phone</th>
        //       <th>email</th>
        //       <th>appliance</th>
        //       <th>brush</th>
        //       <th>guard</th>
        //       <th>history</th>
        //       <th>notes</th>
        //     </tr>
        //     </tbody>
           
        //         <tr key={key}>
        //           <td>{val.firstName}</td>
        //           <td>{val.lastName}</td>
        //           <td>{val.houseName}</td>
        //           <td>{val.houseNumber}</td>
        //           <td>{val.street}</td>
        //           <td>{val.city}</td>
        //           <td>{val.postCode}</td>
        //           <td>{val.phone}</td>
        //           <td>{val.email}</td>
        //           <td>{val.brush}</td>
        //           <td>{val.guard}</td>
        //           <td>{val.history}</td>
        //           <td>{val.notes}</td>
                  
        //         </tr>
              
           
        //   </table>
        // </div>
      );  
}
  
export default CustomerTable;