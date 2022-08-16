import './About.css';
import Logo from '../img/Logo.svg';
import MerryGoRound from '../img/video_1_1.mp4';
import LinkButton from './LinkButton'

const About = () => {
    return (
        <div className="about-background">
            <div className="about-header">
                <LinkButton className="about-logo-button" to='/'>
                    <img src={Logo} className="about-logo" alt="Exhibit Logo"/>
                </LinkButton>
                
            </div>
            <div className="about-body">
                <span className="about-title">
                    ABOUT EXHIBIT
                </span>
                <br></br>
                <span className="about-text">
                At ExhiBit, we're excited to showcase the next generation of an NFT marketplace. What is an NFT? It's an acronym for 
'non-fungible-token', a new type of digital asset that's unique, provably authentic, liquid and easy to buy sell or share.
<br></br>
<br></br>
At ExhiBit we have improved the process of browsing NFT's, making it easier than ever to find what you are interested in.
Minting, offering, buying, and selling NFT's has never been simpler. Create a virtual art gallery to display your favorite NFT's, or
order your NFT printed, framed and sent to you, together with a QR Code or RFID chip that prove it's yours. We will be slowly revealing other exciting features that the marketplace will have to offer, so make sure to follow us.
 ExHibit operates on the BSC network, which offers security and low fees, we have been working on our project for over 6 months and throughout the development process security has been our top priority, followed by a user-friendly UI
 and impressive new features not offered anywhere else.
<br></br>
<br></br>
We are a 4 person team operating out of central Europe, constisting of a  graphic designer, front end developer,
solidity developer, and full stack developer. We are quickly gaining experience and are eager for more oppurtunities.
Thinking of getting a project made? Contact us.
                </span>
                <video className='about-merry-go-round' autoPlay loop muted>
                    <source src={MerryGoRound} type='video/mp4' />
              </video>
            </div>
            <div className="about-footer">
                <span className="about-copyright">Copyrights © 2022 Grupka z DD która robi projekty blockhain</span>
            </div>
        </div>

    )
}

export default About;