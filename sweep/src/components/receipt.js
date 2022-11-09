import './receipt.css'

const Receipt = (props) => {
    console.log('receipt props');


    const _data = props.item;

 return(
    <div className="receipt">
        <div className="receiptheader">
            <img className="apicsimg"
          src={require("../images/apics-square-logo.png")}
          alt="XYZ Chimney Sweep Ltd"></img>
            <img
          className="receiptimg"
          src={require("../images/rectitle.png")}
          alt="XYZ Chimney Sweep Ltd"
        ></img>
            <img className="hetasimg"
          src={require("../images/hetaslogo.jpeg")}
          alt="XYZ Chimney Sweep Ltd"></img>
        </div>

        <section className="receiptDetails">
            <div className="customerDetailsrec">
                <h3>Date:</h3>
                <h3>{_data.houseName}<br/>
                {_data.houseNumber} {_data.street}<br/>
                {_data.city}<br/>
                {_data.postCode}
                </h3>
                <h3>{_data.firstName} {_data.lastName}</h3>
            </div>

            <div className="businessDetailsrec">
            <img className="abcsweep1"
          src={require("../images/ABCsweeper.jpeg")}
          alt="XYZ Chimney Sweep Ltd"></img>
            <div>
                <h4 className='bxaddress'>Herbert Alfred<br/>
            XYZ Chimney Sweep Ltd<br/>
            01603 987654<br/>
            07789123456</h4>
            </div>
            <img className="abcsweep2"
          src={require("../images/ABCsweeper.jpeg")}
          alt="XYZ Chimney Sweep Ltd"></img>
            
            </div>
        </section>

        <div className="jobdetails">
                

            <form>
                <select name ="work carried out">
                    <option value="1 x sweep / inspection">1 x sweep / inspection</option>
                    <option value="2 x sweep / inspection">2 x sweep / inspection</option>
                    <option value="Call out Charge only">Call out Charge only</option>
                </select>    
                <textarea name="Additional info" placeholder="Additional info"></textarea>
           
            </form>
            <h2>
                Total £
            </h2>
            <h4 className='h4rec'>REGULAR SWEEPING IS IMPORTANT, CLEAN CHIMNEYS ARE SAFE CHIMNEYS</h4>
            <div className="footer">Herbert Alfred, 17 Cherry Tree Lane, SW10 London. Compnay Number 0987654321</div>
        </div >
        

    </div>

 )
 }
 export default Receipt;
