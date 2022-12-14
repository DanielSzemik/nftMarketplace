import './CenterBox.css';
import React from "react"
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton'
import { useMediaQuery } from 'react-responsive'
 
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

      const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 882 })
        return isDesktop ? children : null
      }
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 882 })
        return isMobile ? children : null
      }

    return (
        <div className="top-level">
            <Desktop>
                <span className="discover-collect-create">DISCOVER. COLLECT. CREATE<span className="star-next-to-create">*</span></span>
                <div className="right-div">
                    <span className="get-ready-text">*Get ready for a new space centered around art creators and collectors</span>
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
            </Desktop>
            <Mobile>
                <span className="discover-collect-create-mobile">DISCOVER. COLLECT. CREATE<span className="star-next-to-create-mobile">*</span></span>
                <div className="right-div-mobile">
                    <span className="get-ready-text-mobile">*Get ready for a new space centered around art creators and collectors</span>
                    <div className="days-rectangle-mobile">
                        <span className="days-top-mobile">
                            <span className="days-number-mobile">{leftCountdownValue}</span>
                            <span className="days-mobile">{leftCountdownLabel}</span>
                        </span>
                    </div>
                    <div className="hours-rectangle-mobile">
                        <span className="days-top-mobile">
                            <span className="days-number-mobile">{rightCountdownValue}</span>
                            <span className="days-mobile">{rightCountdownLabel}</span>
                        </span>
                    </div>
                        <LinkButton className="learn-more-button-mobile" to='/About'>
                            <span className="learn-more-text-mobile">LEARN MORE</span>
                        </LinkButton>

                </div>
            </Mobile>
            
        </div>

    )
}

export default CenterBox;