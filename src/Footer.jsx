
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="main-content">
                    <div className="logo-section">
                        <div className="logo">
                            <img src="Images/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png" alt="Logo" />
                        </div>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><img src="Images/Facebook-icon.png" alt="Facebook" /></a>
                            <p>|</p>
                            <a href="https://www.instagram.com/accounts/login/?hl=en"><img src="Images/Instagram-icon.png" alt="Instagram" /></a>
                            <p>|</p>
                            <a href="https://twitter.com/login?lang=en-gb"><img src="Images/Twitter-icon.png" alt="Twitter" /></a>
                            <p>|</p>
                            <a href="https://www.youtube.com/account"><img src="Images/Youtube-icon.png" alt="Youtube" /></a>
                        </div>
                    </div> 
                    <div className="quicklink-section">
                        <h2>QUICK LINK</h2>
                        <p>Terms</p> 
                        <p>Privacy</p> 
                        <p>Spiritual Commitment</p> 
                        <p>Contact</p> 
                    </div>
                    <div className="newsletter-section">
                        <h2>NEWSLETTER</h2>
                        <p>Subscribe to our newsletter to get our latest updates and news.</p>
                        <div className="input-container">
                            <input type="email" placeholder="Your email address" />
                            <button><img src="Images/Send-icon.png" className="send-icon"/></button>
                        </div>
                    </div>
                </div>

                <div className="hr"></div>
              
                <p className="copyright">&copy; Copyright 2025 IFAKIKO. All Rights Reserved.</p>
                   
            </footer>
        </>
    );
}

export default Footer;

