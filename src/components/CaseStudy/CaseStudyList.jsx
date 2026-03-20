import { useState } from "react";
import CaseStudyBlock from "./CaseStudyBlock";
import BandhanModal from "./BandhanModal";
import projects from "../../data/projects";

export default function CaseStudyList() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <>
      <section className="flex flex-col gap-[62px]">
        {projects.map((project, index) => (
          <CaseStudyBlock
            key={project.id}
            project={project}
            index={index}
            onPasswordClick={setModalProject}
          />
        ))}
      </section>

      {modalProject && (
        <BandhanModal
          project={modalProject}
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
