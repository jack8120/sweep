// import './cardstyle';

const Card = (props) => {
    console.log('props');

 let name      = props.Name;
 let address   = props.Address;
 let phone     = props.Phone;
 let email     = props.Email;

 let appliance = props.Appliance;
 let brush     = props.Brush;
 let guard     = props.Guard;

 let history   = props.History;
 let notes     = props.Notes;

 return(
    

    <div className='card'>

        <div className='details'>

            <div className='customer'>
                <div className="custHead">
                    <h2>Customer Details</h2>
                </div>
                <div className="custBody">
             <h1>{name} </h1>
             <h2>{address}</h2>
             <h2>{phone}</h2>
             <p>{email}</p>
             </div>
           </div>

           <div className='job'>
           <div className="jobHead">
            <h2>Job Details</h2>
            </div>
            <div className="jobBody">
             <h3>Appliance: </h3><p>{appliance}</p>
             <h3>Brush Type: </h3><p>{brush}</p>
             <h3>Guard ?: </h3><p>{guard}</p>
             </div>
           </div>

        </div>

        <div className='notes'>
        <p>History: {history}</p>
        <p>Notes: {notes}</p>
        </div>

    </div>
 )
}

export default Card;