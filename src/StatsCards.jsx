const StatsCards = ({ src, count, label}) => {
    return (
        <>
            <div className="stat-box">
                <div className="stat-icon">
                    <img src={src} alt="card-icon"/>
                </div>
                <span className="download-counts count">{count}</span>
                <p className="stat-text">{label}</p>
            </div>
        </>
    );
}

export default StatsCards;