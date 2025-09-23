//CSS
import "./App.css"

//components
import Header from "./components/Header/Header";
import Introduction from "./components/IntroductionContainer/IntroductionContainer";
import { TitleContentContainer } from "./components/IntroductionContainer/IntroductionContainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import ContainerContent from "./components/ContainerContent/ContainerContent";

//contents
import { projects } from "./content/projectContent";

//images
import mySelf from "./assets/myself.jpg";

function App() {
  return (
    <div className="container-main">
      <Header />

      <Introduction
        title={
          <>
            I'm <strong>Yasmin</strong>
          </>
        }
        content={
          <>
            Aspiring <strong>UX/UI Designer</strong> learning to create meaningful digital experiences
            through <strong>design thinking</strong> and <strong>user empathy</strong>
          </>
        }
      />

      <TitleContentContainer
        title={
          <>
            <span id="projects"><strong>My Projects</strong></span>
          </>
        }
        content={
          <>
            Here are some of my recent academic and personal projects that showcase my learning journey
            and growing understanding of user-centered design principles.
          </>
        }
      />

      <div className="container-projects">
        {
          projects.map((item, idx) => {
            return <ProjectContainer
              key={idx}
              {...item}
            />
          })
        }
      </div>

      <ContainerContent
        title="About me"
        content={
          <>
            I’m a UX/UI designer based in Vancouver, with a background in teaching and customer-facing roles that strengthened my communication, empathy, and problem-solving skills.
            <br /><br />
            I recently completed a UX/UI Design Diploma, I’ve worked on projects involving user research, wireframing, prototyping, usability testing, and design systems. My approach combines creativity with analytical thinking, always keeping accessibility and inclusivity at the center.
            <br /><br />
            I believe great design goes beyond visuals — it’s about understanding users’ needs and delivering meaningful experiences that align with business goals.
            <br /><br />
            <b>E-mail:</b> yasmincardoso05@gmail.com
          </>
        }
        image={mySelf}
        reverse
      />

    </div>
  );
}

export default App;
