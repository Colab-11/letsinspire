function Navbar() {
    return (
       <nav>
           <div className="nav-flex wrapper">
                <div className="brand">
                    <p className="logo">Earnest</p>
                    <p>Find the right project for you</p>
                </div>
                <div className="user-sign-in">
                    <button className="btn-primary">Sign in</button>
                    <button className="btn-secondary">Sign up</button>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;