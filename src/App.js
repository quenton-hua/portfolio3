import logo from './logo.svg';
import { LinkOut, OctocatFill } from 'akar-icons';
import './App.css';

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="thumbnail">
        <div className="frosted-glass">
          <div className="buttons-section">
            <button>
              <LinkOut strokeWidth={2} size={36} />
            </button>
            <button>
              <OctocatFill strokeWidth={2} size={36} />
            </button>


          </div>

        </div>
      </div>
      <div className="content">
        <h1>uDrink</h1>
        <h5 className="skills-section"> React Native, Firebase</h5>
        <div className="divider"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus est id sem accumsan, sit amet laoreet turpis feugiat. Sed a velit quis justo tristique mollis a a nisl. Nunc sed pharetra odio.
        </p>
        <div className="gap-filler"></div>
        <h5 className="time-period">Feb - May 2024</h5>
      </div>
    </div>
  );
}


function IntroductionSection() {
  return (
    <section className="introduction">
      <div className="title">
        <div className="row1"> <h1>QUENTON</h1></div>
        <div className="row2"> <h1>HUA</h1> <div className="subtitle-container">
          <div>
            <h2> <b className="role">Full-Stack Developer</b>, </h2>
            <h2> Computer Engineer @ <b className="school">TAMU</b> </h2>
            <div className="button-tray"><div className="icon-tray"> <button> Test1</button> <button> Test2</button></div>    </div>
          </div></div>
        </div>
      </div>
    </section>

  )
}

function ProjectSection() {
  return (
    <section className="projects">
      <ProjectCard />
    </section>
  );
}

function App() {
  return (
    <div className="App">
      {/* <ProjectSection /> */}
      <IntroductionSection />
    </div>
  );
}

export default App;
