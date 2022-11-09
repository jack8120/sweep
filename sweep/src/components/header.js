import './header.css'

const Header = (props) => {
    console.log('headsup');

    return(
        <nav className='header' >
            <div className='logo'>
            <img
          className="logoimg"
          src={require("../images/logoBlue.png")}
          alt="logo"
        ></img>
            </div>
            <div>
            <img
          className="titleimg"
          src={require("../images/titleBlack.png")}
          alt="logo"
        ></img>
        </div>
            
            <div className='headermenu'>menu
            </div>
        </nav>
    )
}

export default Header;