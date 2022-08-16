import './CenterBox.css';
import React from "react"
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton'
 
const CenterBox = () => {
    const launchDate = new Date(2022, 7, 16, 21, 0, 0);
    const [time, setTime] = React.useState(new Date());
    const [leftCountdownLabel, setLeftCountdownLabel] = React.useState("min");
    const [leftCountdownValue, setLeftCountdownValue] = React.useState("0");
    const [rightCountdownLabel, setRightCountdownLabel] = React.useState("sec");
    const [rightCountdownValue, setRightCountdownValue] = React.useState("0");
    React.useEffect(() => {
        setInterval(() => {
            var today = new Date();
            var dayDiff = launchDate.getTime() - today.getTime() 
            if (dayDiff > 1000 * 3600 * 24){
                setLeftCountdownLabel("days");
                var days = dayDiff / (1000 * 3600 * 24);
                setLeftCountdownValue(Math.floor(days));
                setRightCountdownLabel("hours");
                var hours = (dayDiff / (1000 * 3600))%24;
                setRightCountdownValue(Math.floor(hours));
            }
            else if (dayDiff > 1000 * 3600){
                setLeftCountdownLabel("hours");
                var hours = dayDiff / (1000 * 3600);
                setLeftCountdownValue(Math.floor(hours));
                var minutes = (dayDiff / (1000 * 60))%60;
                setRightCountdownLabel("min");
                setRightCountdownValue(Math.floor(minutes));
            }
            else if (dayDiff > 0){
                setLeftCountdownLabel("min");
                var minutes = dayDiff / (1000 * 60);
                setLeftCountdownValue(Math.floor(minutes));
                setRightCountdownLabel("sec");
                var seconds = (dayDiff / (1000))%60;
                setRightCountdownValue(Math.floor(seconds));
            }
        }, 1);
      }, []);

    return (
        <div className="top-level">
            <span className="discover-collect-create">DISCOVER. COLLECT. CREATE<span className="star-next-to-create">*</span></span>
            <div className="right-div">
                <span className="get-ready-text">*Get ready for a new space centered &nbsp;&nbsp;around art creators and collectors</span>
                <div className="days-rectangle">
                    <span className="days-top">
                        <span className="days-number">{leftCountdownValue}</span>
                        <span className="days">{leftCountdownLabel}</span>
                    </span>
                </div>
                <div className="hours-rectangle">
                    <span className="days-top">
                        <span className="days-number">{rightCountdownValue}</span>
                        <span className="days">{rightCountdownLabel}</span>
                    </span>
                </div>
                    <LinkButton className="learn-more-button" to='/About'>
                        <span className="learn-more-text">LEARN MORE</span>
                    </LinkButton>

            </div>
        </div>

    )
}

export default CenterBox;