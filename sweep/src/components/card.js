import './card.css';


// card component
const Card = (props) => {


    const _data = props.item;

    console.log(_data);

 return(
    
    <div className='card'>

        <div className='details'>
            <div className="customerDetails">
                <h1>Customer Details</h1>
                <hr/>
                <h3>{_data.firstName} {_data.lastName}</h3>
                <h3>{_data.houseName}<br/>
                {_data.houseNumber} {_data.street}<br/>
                {_data.city}<br/>
                {_data.postCode}
                </h3>
                <h3>{_data.phone}</h3>
                <h3>{_data.email}</h3>
            </div> 
        

            <div className="jobDetails">
                <h1>Job Details</h1>
                <hr/>
                <h3>Appliance:  </h3><p>{_data.appliance}</p>
                <h3>Brush Type: </h3><p>{_data.brush}</p>
                <h3>Guard ?:    </h3><p>{_data.guard}</p>
             </div>
        </div>

            <div className="notes">   
                <hr/>
                <h4>History: {_data.history}</h4>
                <h4>Notes:   {_data.notes}</h4>
            </div> 

    </div>
    
 )
}

export default Card;