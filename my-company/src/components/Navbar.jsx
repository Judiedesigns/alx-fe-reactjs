import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '24px'}}>
            <Link to='/' style={ {color: '#333333', textDecoration: "none", fontweight:'medium'}}>Home</Link>
            <Link to='/about' style={ {olor: '#333333', textDecoration: "none", fontweight:'medium'}}>About</Link>
            <Link to='/services' style={ {olor: '#333333', textDecoration: "none", fontweight:'medium'}}>Services</Link>
            <Link to='/contact' style={ {olor: '#333333', textDecoration: "none", fontweight:'medium'}}>Contact</Link>
            <Link to='/new-contact' style={ {olor: '#333333', textDecoration: "none", fontweight:'medium'}}>New Contact</Link>
        </nav> 
    )
}
export default Navbar 