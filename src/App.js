import React, { Component } from 'react';
import Particles from 'react-particles-js';
import data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarScrolled: false };
    this.sectionNavbar = React.createRef();
    this.sectionAbout = React.createRef();
    this.sectionProjects = React.createRef();
    this.sectionContact = React.createRef();
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
    window.scroll({
      top: section.current.offsetTop - this.sectionNavbar.current.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const {
      navbarScrolled,
    } = this.state;

    return (
      <>
        <header className="header">
          <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark ${navbarScrolled ? 'scrolledNavbar' : ''}`} ref={this.sectionNavbar}>
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
                <li className="nav-item" onClick={() => this.scrollToSection(this.sectionAbout)}>
                  <p className="nav-link text-light">About</p>
                </li>
                <li className="nav-item" onClick={() => this.scrollToSection(this.sectionProjects)}>
                  <p className="nav-link text-light">Projects</p>
                </li>
                <li className="nav-item" onClick={() => this.scrollToSection(this.sectionContact)}>
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
                onClick={() => this.scrollToSection(this.sectionAbout)}>
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
              With a professional background as a ReactJS developer, my primary goal is to master this technology, but I also love
              to learn new libraries and frameworks when I see they provide real value to the development.
            </p>

            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              Javascript is my main programming language followed by Python, but I have also developed some projects in other languages
              such as Java, C# or C++ alongside some libraries from each one. In my opinion, each programming language can show you
              a new point of view that you never saw before.
            </p>

            <p className="pl-xl-5 pr-xl-5 ml-xl-5 mr-xl-5 text-center">
              Outside of work, you'll either find me spending time with family and friends, looking for interesting API's on the internet to
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

        <div className="container-fluid section-projects pt-3 pb-5" id="section-projects" ref={this.sectionProjects}>
          <h3 className="text-center">Projects</h3>
          <hr className="divider info my-4"></hr>
          <p className="text-center font-weight-bold">Here are some cool projects with links to the live website and source code</p>
          <div className="projects-showcase">

            <div className="d-flex justify-content-around flex-wrap">
              <div className="flip-card project-f1 mt-5">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="text-light d-inline-block px-3 mx-4">
                        Formula 1 Season Tracker
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-buttons mt-2">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => window.open("https://sylvainstak.github.io/formula1-season-tracker/", "_blank")}
                        >
                          <i className="fas fa-bolt mr-2"></i> Live Website
                        </button><br />
                        <button
                          type="button"
                          className="btn btn-dark mt-2"
                          onClick={() => window.open("https://github.com/SylvainStak/formula1-season-tracker", "_blank")}
                        >
                          <i className="fab fa-github mr-2"></i> Source Code
                        </button>
                      </div>
                      <div className="p-1">
                        <h5 className="mt-3">Formula 1 Season Tracker</h5>
                        <p>Provides a clean UI made with ReactJS for the current Formula 1 season.</p>
                        <p>Data is gathered from the Ergast API.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flip-card project-game-of-life mt-5">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="text-light d-inline-block px-3 mx-4">
                        Game Of Life
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-buttons mt-2">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => window.open("https://sylvainstak.github.io/Projects/GameOfLife/index.html", "_blank")}
                        >
                          <i className="fas fa-bolt mr-2"></i> Live Website
                        </button><br />
                        <button
                          type="button"
                          className="btn btn-dark mt-2"
                          onClick={() => window.open("https://github.com/SylvainStak/sylvainstak.github.io/tree/master/Projects/GameOfLife", "_blank")}
                        >
                          <i className="fab fa-github mr-2"></i> Source Code
                        </button>
                      </div>
                      <div className="p-1">
                        <h5 className="mt-3">Game of Life</h5>
                        <p>Visualization of the Conway's Game of Life with customizable grid.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="d-flex justify-content-around flex-wrap">
              <div className="flip-card project-sorting-visualizer mt-5">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="text-light d-inline-block px-3 mx-4">
                      Sorting Visualizer
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-buttons mt-2">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => window.open("https://sylvainstak.github.io/Projects/SortingVisualizer/index.html", "_blank")}
                      >
                        <i className="fas fa-bolt mr-2"></i> Live Website
                      </button><br />
                      <button
                        type="button"
                        className="btn btn-dark mt-2"
                        onClick={() => window.open("https://github.com/SylvainStak/sylvainstak.github.io/tree/master/Projects/SortingVisualizer", "_blank")}
                      >
                        <i className="fab fa-github mr-2"></i> Source Code
                      </button>
                    </div>
                    <div className="p-1">
                      <h5 className="mt-3">Sorting Visualizer</h5>
                      <p>Sorting Visualizer by color implementing 4 of the most famous sorting algorithms.</p>
                      <p>Built using javascript generator functions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-card project-wolfram mt-5">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="text-light d-inline-block px-3 mx-4">
                      Wolfram Elementary Cellular Automata
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-buttons mt-2">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => window.open("https://sylvainstak.github.io/Projects/CellularAutomaton/index.html", "_blank")}
                      >
                        <i className="fas fa-bolt mr-2"></i> Live Website
                      </button><br />
                      <button
                        type="button"
                        className="btn btn-dark mt-2"
                        onClick={() => window.open("https://github.com/SylvainStak/sylvainstak.github.io/tree/master/Projects/CellularAutomaton", "_blank")}
                      >
                        <i className="fab fa-github mr-2"></i> Source Code
                      </button>
                    </div>
                    <div className="p-1">
                      <h5 className="mt-3">Wolfram Elementary Cellular Automata</h5>
                      <p>Visualization of the rules from 0 to 255 of the Wolfram Elementary Cellular Automata.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container-fluid section-contact pb-4 text-center" ref={this.sectionContact}>
          <h3 className="text-center text-light pt-4">Contact Me</h3>
          <hr className="divider info my-4"></hr>
          <p className="text-center">I'd love to hear from you!</p>
          <button
            type="button"
            className="btn btn-light mt-2"
            onClick={() => window.open("mailto:afonsoponcesl@gmail.com", "_blank")}
          >
            <i className="fas fa-envelope mr-2"></i> afonsoponcesl@gmail.com
          </button>
        </div>
      </>
    );
  }
}

export default App;
