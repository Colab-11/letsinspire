import { Link } from 'react-router-dom';

function Navbar({setUserInput}) {
    const resetInputs = () => {
        setUserInput({
            userName: "",
            language: "",
            interest: "",
            resource: "",
            projectLength: "",
            projectType: "",
            projectName: ""
        })
    }

    return (
       <nav>
           <div className="nav-flex wrapper">
                    <Link to="/" className="brand" onClick={resetInputs}>
                        <div className="brand-logo"></div>
                        <div className="logo-text">
                            <p className="logo">Let's Inspire</p>
                            <p>Find the Right Project for you</p>
                        </div>
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