const Receipt = (props) => {
    console.log('receipt props');

 let name      = props.Name;
 let address   = props.Address;

 return(
    <div className="receipt">
        <div className="receiptDetails">
        <div className="customerDetails">
            <h3>Name: {name} </h3>
            <h3>Address: {address}</h3>
            <h3>Date: </h3>
        </div>

        <div className="businessDetails">ABC Sweep stuff</div>
        </div>

        <div className="job details"></div>












    </div>

 )
 }
 export default Receipt;
