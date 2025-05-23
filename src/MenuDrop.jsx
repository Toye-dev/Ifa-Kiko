

const MenuDrop = ({menuShows, handleMenuHides, handleMenuShows}) => {
    return (
        <>
            <nav className={`nav ${menuShows ? "active" : ""}`}>
                
                <div className="logo-icon logo-for-menu">
                   
                    <div
                        className={`hide-menu-icon icon-for-menu ${menuShows ? "show" : "hide"}`}
                        onClick={handleMenuHides}
                    >≡ 
                    </div>

                    <div
                        className={`show-menu-icon icon-for-menu ${!menuShows ? "show" : "hide"}`}
                        onClick={handleMenuShows}
                    >≡ 
                    </div>

                    <div className="logo">
                        <img src="Images/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png" alt="Logo" />
                    </div>
                    
                </div>

               <div>
                    <ul className="nav-list" style={{textDecoration:"none", marginTop:"100px"}}>
                        <li><a onClick={handleMenuHides}>Home</a></li>
                        <li><a href="#about-section"  onClick={handleMenuHides}>About Ifá</a></li>
                        <li><a href="#explore-section"  onClick={handleMenuHides}>Explore Verses</a></li>
                        <li><a href="#features-section"  onClick={handleMenuHides}>Features</a></li>
                        <li><a href="#pricing-section"  onClick={handleMenuHides}>Pricing</a></li>
                    </ul>
               </div>
                
                <div className="lang-button">
                    <img src="Images/globe-icon.png" alt="globe-icon" className="lang-globe"/>
                    <p>En</p>
                    <img src="Images/arrow-icon.png" alt="arrow-icon" className="lang-arrow"/>
                </div>
            
              
            </nav> 
        </>
    );
   
}

export default MenuDrop;