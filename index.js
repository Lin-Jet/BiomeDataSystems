
function Navbar(){
    return (
        <div className="nav" id="home">
            <h1 className="nav-logo">Biome Data Systems</h1>
            <ul className="nav-items">
                <li className="nav-about"><a href="#aboutus">About Us</a></li>
                <li className = "dropdown">
                    <span>Contact Us</span>
                    <div className="dropdown-content">
                        <li><a href="https://www.linkedin.com/company/biome-data-systems/" target="_blank">LinkedIn</a></li>
                        <li><a href="tel:951-450-1399">Call Us</a></li>
                        <li><a href = "mailto: advancement@biomedatasystems.com">Email Us</a></li>
                    </div>
                </li>
            </ul>
        </div>
    )
}

function Header(){
    return(
        <div className="header">
            <img src="./images/BDSpictures/app-icon-crop.png" width="500rem"alt="Biome Data Systems Header Picture" />
        </div>
    )
}

function ComingSoon(){
    return(
        <div className="coming-soon">
            <h1 className="coming-soon-main">Coming Soon</h1>
            <h3 className="coming-soon-sub">Biome App x Watch</h3>
            <div className="spinner"></div>
            <img src="./images/BDSpictures/th.jpg" className="coming-soon-watch"/>
        </div>
    )
}

function About(){
    return(
        <div className="about" id="aboutus">
            <h1 className="about-title">About Us</h1>
            <div className="mission">
                <h1>Mission Statement</h1>
                <p>Biome Data Systems is creating software for wearable medical IoT technology. We believe that all people should have equitable access to wearable technology that could potentially save lives and improve the health of millions.</p>
            </div>
            <div className="card-grid">
                
                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/ZacharyAmith.png" alt="Zach Amith" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Zachary Amith</h1>
                        <h4>Chief Technology Officer</h4>
                        <p><i></i></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Jet Mejia-Bohol.JPG" alt="Jet Mejia" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jet Mejia</h1>
                        <h4>Chief Executive Officer</h4>
                        {/* <p><i>Responsible for technology development, technological research, and technology affairs</i></p> */}
                    </div>
                </div>
                 
                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Jesus Estrada.JPG" alt="Jesus Estrada" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jesus Estrada</h1>
                        <h4>Director of Relations</h4>
                        {/* <p><i>Responsible for application processing, consumer relations, consumer research, and internal affairs</i></p> */}
                    </div>
                </div>
                 
                {/* <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Kumar.JPG" alt="Swapnil Kumar Sharma" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Swapnil Kumar Sharma</h1>
                        <h4>Relations Officer</h4>
                        
                    </div>
                </div>  */}

                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Nima Ogabian.JPG" alt="Nima Ogabian" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Nima Ogabian</h1>
                        <h4>Director of Internal Operations</h4>
                        
                    </div>
                </div> 

                {/* <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Darren Roberson.JPG" alt="Darren Roberson" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Darren Roberson</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div> */}
{/* 
                <div className="card">
                    <div className="card-header">
                    <img src="./images/BiomeDataTeamPics/CyrusArellano.JPG" alt="Cyrus Arellano" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Cyrus Arellano</h1>
                        <h4>App and Software Developer</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Peter Kinyanjui.JPG" alt="Peter Kinyanjui" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Peter Kinyanjui</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div> */}

                <div className="card">
                    <div className="card-header">
                        <img src="./images/BiomeDataTeamPics/Jet Lin.JPG " alt="Jet Lin" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jet Lin</h1>
                        <h4>Web Developer</h4>
                    </div>  
                </div>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <ul className="footer-items">
                <li><a href="#home">Home</a></li>
                <li><a href="https://www.linkedin.com/company/biome-data-systems/" target="_blank">LinkedIn</a></li>
                <li><a href="tel:951-450-1399">Call Us</a></li>
                <li><a href = "mailto: advancement@biomedatasystems.com">Email Us</a></li>
            </ul>
        </div>
    )
}

function App() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <ComingSoon />
        <About />
        <Footer />
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById("root"))