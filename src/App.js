import React, { Component } from 'react';
import Particles from 'react-particles-js';
import data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.sectionAbout = React.createRef();
    this.state = {
      navbarScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ navbarScrolled: window.scrollY > 100 ? true : false });
    });
  }

  renderSkills() {
    return data.skills.map((skill) => 
      <h4 key={skill}><span className="badge badge-warning mr-2">{skill}</span></h4>
    );
  }

  scrollToSection(section) {
    section.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const {
      navbarScrolled,
    } = this.state;

    return(
      <>
        <header className="header">
          <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark ${navbarScrolled ? 'scrolledNavbar' : ''}`}>
            <a className="navbar-brand" href="https://sylvainstak.github.io/about">Sylvain Afonso</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={() => this.scrollToSection(this.sectionAbout) }>
                  <p className="nav-link text-light">About</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link text-light">Projects</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link text-light">Contact</p>
                </li>
              </ul>
            </div>

          </nav>

          <div className="intro">
            <h3 className="text-center text-light">Hi, I'm Sylvain, Full Stack Web Developer</h3>
            <hr className="divider info my-4"></hr>
            <h5 className="text-center text-light">WELCOME TO MY PORTFOLIO</h5>
            <div className="circle-container">
              <div
                className="rounded-circle bg-light p-2 scrollDownIntro m-auto text-center"
                onClick={() => this.scrollToSection(this.sectionAbout) }>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <Particles params={data.particlesConfig} />
        </header>

        <div className="container-fluid section-about pt-3 pb-3" id="section-about" ref={this.sectionAbout}>
          <h3 className="text-center">About Me</h3>
          <hr className="divider info my-4"></hr>
          <div className="container">
            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              I am a Full Stack Developer skilled in multiple technologies related with web development, I put my focus on
              ReactJS in the front-end and NodeJS in the back-end.
            </p>

            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              With a proffesional background as a ReactJS developer, my primary goal is to master this technology, but I also love
              to learn new libraries and frameworks when I see they provide real value to the development.
            </p>

            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              Javascript is my main programming language followed by Python, but I have also developed some projects in other languages
              such as Java, C# or C++ alongside some libraries from each one. In my opinion, each programming language can show you
              a new point of view that you never saw before.
            </p>

            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              Outside of work, you'll either find me spending time with family and friends, looking for a good API on the internet to 
              make a good interface out of it, Simracing, or watching Formula 1 and other motorsport events.
            </p>

            <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-dark mt-4"
              onClick={() => window.open("https://github.com/SylvainStak", "_blank")}
            >
              <i className="fab fa-github mr-2"></i> Github Profile
            </button>
            </div>
            <hr className="divider info my-4"></hr>
            <h3 className="text-center mb-4">Main Skills</h3>
            <div className="skills mb-4">
              {this.renderSkills()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
