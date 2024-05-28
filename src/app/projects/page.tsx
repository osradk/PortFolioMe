import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
const ProjectsPage = () => {
  return (
      <div className="relative min-h-screen">
          <Navbar />
          <div className="pt-20">
              <Projects />
          </div>
          <Contact />
      </div>
  );
};

export default ProjectsPage;