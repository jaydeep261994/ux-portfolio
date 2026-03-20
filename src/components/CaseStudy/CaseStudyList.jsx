import CaseStudyBlock from "./CaseStudyBlock";
import projects from "../../data/projects";

export default function CaseStudyList() {
  return (
    <section className="flex flex-col gap-[62px] px-4 md:px-0">
      {projects.map((project, index) => (
        <CaseStudyBlock key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
