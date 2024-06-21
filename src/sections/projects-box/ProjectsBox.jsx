import Card from "../../components/Card";
import projects from "../../data/projects";
import "./style.css";
import contactForm from "../../assets/Contact-Form.webp";
import form from "../../assets/Form.webp";
import contactPage from "../../assets/Contact-Page.webp";
import iconHover from "../../assets/Icon-Hover.webp";
import button3D from "../../assets/3D-Button.webp";
import gridGallery from "../../assets/Grid-Gallery.webp";
import expandingImage from "../../assets/Expanding-Image.webp";
import videoInText from "../../assets/Video-in-Text.webp";
import list3D from "../../assets/3D-List.webp";
import splashImage from "../../assets/Splash-Image.webp";
import timeline from "../../assets/Timeline.webp";
import backgroundChange from "../../assets/Background-Change.webp";
import couchAnimation from "../../assets/Couch-Animation.webp";
import useabilityHub from "../../assets/UseabilityHub.webp";
import netflix from "../../assets/Netflix.webp";
import dashboard from "../../assets/Dashboard.webp";

function ProjectsBox() {
  const projectImages = [
    contactForm,
    form,
    contactPage,
    iconHover,
    button3D,
    gridGallery,
    expandingImage,
    videoInText,
    list3D,
    splashImage,
    timeline,
    backgroundChange,
    couchAnimation,
    useabilityHub,
    netflix,
    dashboard,
  ];

  return (
    <div className="container">
      {projects.map((project, index) => (
        <Card key={index} data={project} imgUrl={projectImages[index]} />
      ))}
    </div>
  );
}

export default ProjectsBox;
