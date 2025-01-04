import ProjectCard from "./ProjectCard";
import musicpic from "../assets/musicpic.jpg";
import apppic from "../assets/apppic.png";
import passgenpic from "../assets/passgenpic.png";
import stencil from "../assets/stencil.png";
import videocrop from "../assets/videocrop.gif";
import voronpic from "../assets/voron/DSC07276.jpg";
import sandboxpic from "../assets/sandboxpic.png";
import roverpic from "../assets/roverpic.jpg";
import go1pic from "../assets/go1pic.png";
import txtdumppic from "../assets/txtdumppic.png";
import simrig from "../assets/simrig/simrigbanner.png";
import freedomfinancespic from "../assets/freedomfinancespic.png";
import go1gif from "../assets/go1.gif";

function ProjectShowcase() {
  return (
    <div>
      <ProjectCard
        image={videocrop}
        id="video"
        title="Motion Simulator Software & Platform"
        description="Control your 6DOF Arduino motion simulator and view its corresponding telemetry."
        link="https://github.com/colemaring/Motion-Master"
      />
      <ProjectCard
        image={roverpic}
        title="RE-RASSOR rover - in development"
        description="Research and Education – Regolith Advanced Surface Systems Operational Robot."
        link="https://github.com/colemaring/RE-RASSOR-lightweight"
      />
      <ProjectCard
        image={txtdumppic}
        title="Code Sharing and Storage Website"
        description="Securely store and share text snippets."
        link="https://github.com/colemaring/MERN-txtdump"
      />
      <ProjectCard
        image={freedomfinancespic}
        title="Debt Management Platform"
        description="Connect your bank and get personalized suggestions based on your transactions and libailities history."
        link="https://github.com/colemaring/Freedom-Finanaces"
      />
      <ProjectCard
        image={musicpic}
        title="Musical Scale Trainer"
        description="Practice your scales for any instrument. (KnightHacks 3rd place overall winner)"
        link="https://devpost.com/software/scale-sense"
      />
      <ProjectCard
        image={stencil}
        title="Stencil Creator"
        description="Create custom text stencils in a 3D environment with real-time rendering."
        page="stencil"
      />
      <ProjectCard
        image={sandboxpic}
        title="Minecraft Sandbox Terrain Visualizer"
        description="A real-time Minecraft terrain visualizer for augmented reality sandboxes using Xbox Kinect."
        link="https://github.com/colemaring/MC-AR-Sandbox"
      />
      <ProjectCard
        image={go1pic}
        title="Hand Gesture Controlled Robot Dog"
        description="Controlling a Unitree Go1 using hand gestures with Google's MediaPipe engine."
        link="https://github.com/colemaring/go1-project"
      />
      <ProjectCard
        image={go1gif}
        id="video"
        title="Robot Dog Synchronization - in development"
        description="Choreographing and synchronizing multiple robot dogs using WebSockets and NTP."
        link="https://github.com/chinmaynehate/rob-sync"
      />
      <ProjectCard
        image={apppic}
        title="Conversation Starter Generator Mobile App"
        description="Generate location relevant conversation starters from anywhere."
        link="https://github.com/colemaring/ConvoAI"
      />
      <ProjectCard
        image={passgenpic}
        title="Password Generator"
        description="Generate passwords given your choice of stength and security."
        page="passwordgen"
      />
      <ProjectCard
        image={voronpic}
        title="Voron 0.2"
        description="DIY 3D printer."
        page="voron"
      />
      <ProjectCard
        image={simrig}
        title="Racing Simulator"
        description="Custom designed and fabricated aluminum extrusion racing simulator."
        page="simrig"
      />
    </div>
  );
}

export default ProjectShowcase;
