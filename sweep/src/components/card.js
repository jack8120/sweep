import './card.css';



const Card = (props) => {
 return(
    
    <div className='card'>

        <div className='details'>
            <div className="customerDetails">
                <h1>Customer Details</h1>
                <hr/>
                <h3>{props.item.name.firstName} {props.item.name.lastName}</h3>
                <h3>{props.item.address.houseNumber} {props.item.address.street}<br/>
                {props.item.address.city}<br/>
                {props.item.address.postCode}
                </h3>
                <h3>{props.item.phone}</h3>
                <h3>{props.item.email}</h3>
            </div> 
        

            <div className="jobDetails">
                <h1>Job Details</h1>
                <hr/>
                <h3>Appliance:  </h3><p>{props.item.appliance}</p>
                <h3>Brush Type: </h3><p>{props.item.brush}</p>
                <h3>Guard ?:    </h3><p>{props.item.guard}</p>
             </div>
        </div>

            <div className="notes">   
                <hr/>
                <h4>History: {props.item.history}</h4>
                <h4>Notes:   {props.item.notes}</h4>
            </div> 

    </div>
    
 )
}

export default Card;