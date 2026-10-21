import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../data/types';
import { experience } from '../../data/experienceData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-charcoal/15 py-7">
      <h3 className="eyebrow mb-4 text-ink/70">{title}</h3>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
      {items.map((i) => (
        <li key={i} className="flex gap-4">
          <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-champagne" />
          {i}
        </li>
      ))}
    </ul>
  );
}

/** Written case study. The designs themselves are shown in the gallery on the page, outside this dialog. */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `case-${project.id}-title`;
  const responsibilities = experience.find((e) => e.id === project.experienceId)?.responsibilities ?? [];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="on-light fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[94svh] w-full max-w-3xl animate-rise flex-col bg-ivory text-ink sm:max-h-[92svh]"
      >
        <div className="flex items-start justify-between gap-6 border-b border-charcoal/15 p-6 sm:p-8">
          <div className="flex items-center gap-5">
            {project.logo && (
              <img
                src={project.logo.src}
                alt={project.logo.alt}
                className="h-14 w-14 shrink-0 border border-charcoal/15 bg-white object-contain"
              />
            )}
            <div>
              <p className="text-[0.68rem] uppercase tracking-wide2 text-ink/70">{project.industry}</p>
              <h2 id={titleId} className="mt-1 text-3xl leading-tight sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-1 text-[0.85rem] text-ink/75">Role: {project.role}</p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/25 hover:bg-charcoal hover:text-ivory"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-8 sm:px-8">
          <Block title="About the client">
            <p className="text-[0.95rem] leading-relaxed">{project.about}</p>
          </Block>
          <Block title="Project goal">
            <p className="text-[0.95rem] leading-relaxed">{project.goal}</p>
          </Block>
          {responsibilities.length > 0 && (
            <Block title="My responsibilities">
              <List items={responsibilities} />
            </Block>
          )}
          {project.approach.length > 0 && (
            <Block title="My approach">
              <List items={project.approach} />
            </Block>
          )}
          {project.results && project.results.length > 0 && (
            <Block title="Results">
              <List items={project.results} />
            </Block>
          )}
          <p className="border-t border-charcoal/15 pt-6 text-[0.82rem] text-ink/70">
            The designs and articles for this project are shown in the gallery on the Selected Work page.
          </p>
        </div>
      </div>
    </div>
  );
}
