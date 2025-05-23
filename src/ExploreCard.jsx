const ExploreCard = ({ titleText, contentText  }) => {

    return (
        <>
        <div className="other-text-divs">
            <div className="text-container">
                <img src="Images/Checkbox-circle.png" alt="mark-icon" className="checkbox" />
                <div className="text">
                    <h2>{titleText}</h2>
                    <p>{contentText}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ExploreCard;