// import '/App.css'

const Card = (props) => {
    console.log('props');

 let name = props.Name;
 let address = props.Address;
 let phone = props.Phone;
 let email = props.Email;

 let appliance = props.Appliance;
 let brush = props.Brush;
 let guard = props.Guard;

 let history = props.History;
 let notes = props.Notes;

 return(

    <div className='card'>
       
        <h1>{name} </h1>
        <h2>{address}</h2>
        <h2>{phone}</h2>
        <p>{email}</p>

        <h3>{appliance}</h3>
        <h3>{brush}</h3>
        <h3>{guard}</h3>

        <p>{history}</p>
        <p>{notes}</p>

    </div>
 )
}

export default Card;