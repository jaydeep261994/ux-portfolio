import CaseStudyBlock from "./CaseStudyBlock";
import projects from "../../data/projects";

export default function CaseStudyList() {
  return (
    <section className="px-4 md:px-8 py-16">
      <h2 className="font-bold mb-8">Selected Work</h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <CaseStudyBlock key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
