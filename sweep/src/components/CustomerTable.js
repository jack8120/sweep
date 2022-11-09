import "./CustomerTable.css"
import React, { useState } from "react";

const CustomerTable = (props) => {



  const _data = props.item;

  console.log("Data:",_data)



  return(

        <div className="table">
          
          <table>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>houseName</th>
              <th>houseNumber</th>
              <th>street</th>
              <th>city</th>
              <th>postCode</th>
              <th>phone</th>
              <th>email</th>
              <th>appliance</th>
              <th>brush</th>
              <th>guard</th>
              <th>history</th>
              <th>notes</th>
            </tr>

              {
                _data.map((value,index)=>{
                  return(

                  <tr key={index}>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.houseName}</td>
                    <td>{value.houseNumber}</td>
                    <td>{value.street}</td>
                    <td>{value.city}</td>
                    <td>{value.postCode}</td>
                    <td>{value.phone}</td>
                    <td>{value.email}</td>
                    <td>{value.appliance}</td>
                    <td>{value.brush}</td>
                    <td>{value.guard}</td>
                    <td>{value.history}</td>
                    <td>{value.notes}</td>
                </tr>

                  )
                })
              }
           
                
              
           
          </table>
        </div>
      );  
}
  
export default CustomerTable;