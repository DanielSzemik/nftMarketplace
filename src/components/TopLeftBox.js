import './TopLeftBox.css';
import Logo from '../img/Logo.svg';
import LinkButton from './LinkButton'

const TopLeftBox = () => {
    return (
        <div className="background">
             <img src={Logo} className="Logo" alt="Exhibit Logo"/>
             <LinkButton className="about-project-button" to='/about'>
                <span className="about-project">About project</span>
            </LinkButton>

        </div>

    )
}

export default TopLeftBox;