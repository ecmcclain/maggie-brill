import '../styles/About.css'
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import maggieProfile from '/maggie-profile.JPEG';

const About = () => {
    return (
        <section id="about" className='fixed-top'>
            <Container fluid className='profile-container'>
                <Card 
                className='container-size' style={{backgroundImage: `url(/maggie-profile.JPEG)`}}>
                <Card.Text 
                className='profile-text'>
                    Maggie Brill is a Brooklyn-based director and cinematographer 
                    with a B.A. in Radio/Television/Film from Northwestern University. 
                    She is particularly passionate about character-driven stories, queer 
                    representation, and coming-of-age narratives. 
                    
                    <br></br><br></br>Her recent cinematography 
                    work includes the dance film BACK IN A STORM and psychological horror 
                    short JINX. Maggie’s short film HOW TO GLOW IN THE DARK, which she wrote 
                    and directed, premiered opening night at CineYouth 2023, presented by 
                    the Chicago International Film Festival. Maggie also graduated with 
                    honors from Prague Film School’s 2021 Autumn Filmmaking program, where 
                    her short film WALTER won the Audience Award for Best Film. 
                    
                    <br></br><br></br>When she’s not filming, Maggie loves visiting art museums, 
                    rock climbing, and discovering new music.
                    </Card.Text>
                    </Card>
            </Container>
        </section>
    )
}

export default About