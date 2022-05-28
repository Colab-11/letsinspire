import { Link } from 'react-router-dom';

function Navbar() {
    return (
       <nav>
           <div className="nav-flex wrapper">
                    <Link to="/" className="brand">
                        <p className="logo">Let's Inspire</p>
                        <p>Find the Right Project for you</p>
                    </Link>
                <div className="user-sign-in">
                    <button className="btn-primary">Log in</button>
                    <button className="btn-secondary">Sign up</button>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;