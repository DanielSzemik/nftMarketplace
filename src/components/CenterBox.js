import './CenterBox.css';

const CenterBox = () => {
    return (
        <div className="top-level">
            <span className="discover-collect-create">DISCOVER. COLLECT. CREATE<span className="star-next-to-create">*</span></span>
            <div className="right-div">
                <span className="get-ready-text">*Get ready for a new space centered &nbsp;&nbsp;around art creators and collectors</span>
                <div className="days-rectangle">
                    <span className="days-top">
                        <span className="days-number">86</span>
                        <span className="days">&nbsp;days</span>
                    </span>
                </div>
                <div className="hours-rectangle">
                    <span className="days-top">
                        <span className="days-number">21</span>
                        <span className="days">&nbsp;hours</span>
                    </span>
                </div>
                <button className="learn-more-button">
                    <span className="learn-more-text">LEARN MORE</span>
                </button>
            </div>
        </div>

    )
}

export default CenterBox;