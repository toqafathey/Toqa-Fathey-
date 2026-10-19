import type { Project } from '../../data/types';
import Gallery from './Gallery';

interface ProjectSectionProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

/** One client: name, short description, link to the written case study, and the full image galleries. */
export default function ProjectSection({ project, onOpenCaseStudy }: ProjectSectionProps) {
  const headingId = `project-${project.id}`;
  return (
    <article aria-labelledby={headingId} className="border-t border-charcoal/25 pt-12">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="flex items-center gap-5 lg:col-span-5">
          {project.logo && (
            <img
              src={project.logo.src}
              alt={project.logo.alt}
              width={72}
              height={72}
              loading="lazy"
              className="h-[72px] w-[72px] shrink-0 border border-charcoal/15 bg-white object-contain"
            />
          )}
          <div>
            <p className="text-[0.68rem] uppercase tracking-wide2 text-ink/70">{project.industry}</p>
            <h3 id={headingId} className="mt-1 text-3xl leading-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.85rem] text-ink/75">{project.role}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[1rem] leading-relaxed text-ink/85">{project.summary}</p>
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            aria-haspopup="dialog"
            className="mt-5 inline-flex min-h-[44px] items-center border border-charcoal px-5 text-[0.7rem] font-medium uppercase tracking-wide2 transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Read the case study
          </button>
        </div>
      </div>

      {project.groups.map((group) => (
        <Gallery key={group.title} group={group} />
      ))}
    </article>
  );
}
