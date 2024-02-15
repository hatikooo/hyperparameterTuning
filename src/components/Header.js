
const Header = props => {
    return (
        <header className="header-section">
            
            <div className="header-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg p-0">
                        <a className="site-logo site-title" href="index.html"><h2>AlgoDealer</h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span style = {{color: "black"}} className="menu-toggle" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav main-menu mr-auto">
                                
                                <li><a href="#">ALGO Balance: {props.balance / 10 ** 6} ALGO</a></li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>{/* header-bottom end */}
        </header>



    );
}

export default Header