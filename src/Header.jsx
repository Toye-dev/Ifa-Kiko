import { useState } from "react";
import SlideinMenu from "./SlideinMenu";
import { useMediaQuery } from "react-responsive";
import GradientButton from "./GradientButton"; 

const Header = () => {
    
    const isLargeScreen = useMediaQuery({ minWidth: 720 });
    const isBelow1358px = useMediaQuery({ minWidth: 720, maxWidth: 1358 }); 
    const [menuShows, setMenuShows] = useState(false);
     
    const handleMenuShows = () => {
        document.body.style.overflow = "hidden";
        setMenuShows(true);
    }

    const handleMenuHides = () => {
        document.body.style.overflow = "auto";
        setMenuShows(false);
    }
    
    return (
        <>  
            
            <header className="header-container">
               {isLargeScreen ? (
                <>
                    <div className="app-header">
                        <div className="logo-icon">
                            <div className="logo">
                                <img src="Images/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png" alt="Logo" />
                            </div>
                            
                        </div>

                        <div className="menu">
                            <ul className="nav-list" style={{textDecoration:"none"}}>
                                <li><a onClick={handleMenuHides}>Home</a></li>
                                <li><a href="#about-section"  onClick={handleMenuHides}>About Ifá</a></li>
                                <li><a href="#explore-section"  onClick={handleMenuHides}>Explore Verses</a></li>
                                <li><a href="#features-section"  onClick={handleMenuHides}>Features</a></li>
                                <li><a href="#pricing-section"  onClick={handleMenuHides}>Pricing</a></li>
                            </ul>
                        </div>
                        <div className="login-button"><p>Login</p></div>
                        <div className="header-buttons">
                            { isBelow1358px ? (
                                <>
                                    <GradientButton text="Sign up" radius= "12" width="75" height="26" />
                                    <GradientButton globeIcon="Images/globe-icon.png" text="En" arrowIcon="Images/arrow-icon.png" radius="7" height="26"  width="58" gradientRadius="10" />
                                </>
                            ) : (
                                <>
                                    <GradientButton text="Sign up" radius= "18" width="175" height="56" />
                                    <GradientButton globeIcon="Images/globe-icon.png" text="En" arrowIcon="Images/arrow-icon.png" radius="8" height="56"  width="118" gradientRadius="10" />
                                </>
                            )}
                        </div>
                        
                    </div>
                </>
               ):(
               <>
                    <div className="app-header">
                        <div className="logo-icon">
                           
                            <div
                                className={`hide-menu-icon ${menuShows ? "show" : "hide"}`}
                                onClick={handleMenuHides}
                            >≡ 
                            </div>

                            <div
                                className={`show-menu-icon ${!menuShows ? "show" : "hide"}`}
                                onClick={handleMenuShows}
                            >≡ 
                            </div>

                            <div className="logo">
                                <img src="Images/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png" alt="Logo" />
                            </div>
                        </div>

                        <div className="header-buttons">
                            <div className="login-button"><p>Login</p></div>
                            <div class="gradient-border-wrapper">
                                <div className="signup-button"><p>Sign up</p></div>
                            </div>
                        </div>
                        
                    </div>

                    <SlideinMenu menuShows={menuShows} handleMenuHides={handleMenuHides} handleMenuShows={handleMenuHides}/>
               </>)}

            </header>
        </>
    );
}

export default Header;