import React from "react";
import { useState } from "react";
import axios from "axios";
import './newCustomerForm.css';

const NewCustomerForm = () => {
  // Data render state
  const [apiData, setApiData] = useState();
  // const [post, setPost] = useState([]);

  // Read
  const getAPI = async () => {
    const reqAPI = "http://localhost:4000/customers/read";

    const reqData = axios.get(reqAPI).then((response) => {
      return response.data;
    });
    console.log(reqData);
    setApiData(apiData);
  };

  // try {
  //     const reqData = await axios.get(reqAPI);
  //   setData(reqData.data);
  //   console.log(data);

  // }catch(err){
  //   console.log(err);

  // }

  const newCustomerSubmitted = async (event) => {
    event.preventDefault();

    const eventTarget = event.target;

    //posting the url

    const _firstName   = eventTarget.firstName.value;
    const _lastName    = eventTarget.lastName.value;
    const _phone       = eventTarget.phone.value;
    const _email       = eventTarget.email.value;
    const _houseName   = eventTarget.houseName.value;
    const _houseNumber = eventTarget.houseNumber.value;
    const _street      = eventTarget.street.value;
    const _city        = eventTarget.city.value;
    const _postCode    = eventTarget.postCode.value;
    const _appliance   = eventTarget.appliance.value;
    const _brush       = eventTarget.brush.value;
    const _guard       = eventTarget.guard.value;
    const _history     = eventTarget.history.value;
    const _notes       = eventTarget.notes.value;
  
    // object - created on form submit

    const newCustomer = {
      firstName: _firstName,
      lastName: _lastName,
      phone: _phone,
      email: _email,
      houseName: _houseName,
      houseNumber: _houseNumber,
      street: _street,
      city: _city,
      postCode: _postCode,
      appliance: _appliance,
      brush: _brush,
      guard: _guard,
      history: _history,
      notes: _notes,
    };

    console.log(newCustomer);

    // post the object

    try {
      const dataSubmitting = await axios.post(
        "http://localhost:4000/customers/create",
        newCustomer
      );
      console.log(dataSubmitting);

      const reqAPI = "http://localhost:4000/customers/read";

      const reqData = await axios.get(reqAPI);
      console.log(reqData)
      setApiData(reqData.data);

    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="container">
      {/* 
              <div>
    <form onSubmit={newCustomerSubmitted}>
          <input type="text"   name="name" placeholder='Name'/><br/>
           <input type='number'  name="phone" placeholder='number'/><br/>
            <input type="text"   name="email" placeholder='email'/><br/>

          <input type="submit" value="submit"/>

    </form><br/>
    </div>

          </div> */}
          <h1>New Customer Form</h1>
      <div className="newCustomerForm">
        <form onSubmit={newCustomerSubmitted}>
          <input type="text" name="firstName" placeholder="First Name" />
          <br />
          <input type="text" name="lastName" placeholder="Last Name" />
          <br />
          <input type="tel" name="phone" placeholder="phone" />
          <br />
          <input type="text" name="email" placeholder="email" />
          <br />
          <input type="text" name="houseName" placeholder="House Name" />
          <br />
          <input type="text" name="houseNumber" placeholder="House Number" />
          <br />
          <input type="text" name="street" placeholder="street" />
          <br />
          <input type="text" name="city" placeholder="city" />
          <br />
          <input type="text" name="postCode" placeholder="postCode" />
          <br />
          <input type="text" name="appliance" placeholder="appliance" />
          <br />
          <input type="text" name="brush" placeholder="brush" />
          <br />
          <input type="text" name="guard" placeholder="guard" />
          <br />
          <textarea name="history" placeholder="history"></textarea>
          <br />
          <textarea name="notes" placeholder="notes"></textarea>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewCustomerForm;
