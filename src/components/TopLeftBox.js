import './TopLeftBox.css';
import Logo from '../img/Logo.svg';

const TopLeftBox = () => {
    return (
        <div className="background">
             <img src={Logo} className="Logo" alt="Exhibit Logo"/>
             <span className="about-project">About project</span>
        </div>

    )
}

export default TopLeftBox;