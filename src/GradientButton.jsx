const GradientButton = ({ text, globeIcon, radius, onClick, fontSize, width, height, arrowIcon, gradientRadius }) => {
    
    const buttonStyle = {
        width: width + "px",
        fontSize: `${fontSize}rem`,
        height: height + "px",
        borderRadius: radius + "px"
    };

    const gradientStyle = {
        borderRadius: gradientRadius + "px"
    }

    return (
        <>
            <div className="gradient-border-wrapper" style={gradientStyle}>
                <div className="reusable-button" style={buttonStyle} onClick={onClick}>
                    {globeIcon && <img src={globeIcon} className="lang-globe" alt="icon"/> }
                    <p>{text}</p>
                    {arrowIcon && <img src={arrowIcon}className="lang-arrow" alt="arrow"/>}
                </div>
            </div>
        </>
    );
}

export default GradientButton;