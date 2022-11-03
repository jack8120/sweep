import './header.css'

const Header = (props) => {
    console.log('headsup');

    return(
        <nav className='header' >
            <div className='logo'>logo
            </div>
            
            <div className='menu'>menu
            </div>
        </nav>
    )
}

export default Header;