import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectVisual } from '../../data/types';
import { captions } from '../../data/captions';

interface LightboxProps {
  visuals: ProjectVisual[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-size viewer: shows the whole image (never cropped), its title, and the written caption when one exists. */
export default function Lightbox({ visuals, index, onIndexChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const latest = useRef({ index, onIndexChange, onClose, total: visuals.length });
  latest.current = { index, onIndexChange, onClose, total: visuals.length };

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      const { index: i, onIndexChange: change, onClose: close, total } = latest.current;
      if (e.key === 'Escape') {
        e.stopPropagation();
        close();
      } else if (e.key === 'ArrowRight' && i < total - 1) {
        change(i + 1);
      } else if (e.key === 'ArrowLeft' && i > 0) {
        change(i - 1);
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])');
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
  }, []);

  const current = visuals[index];
  if (!current) return null;
  const caption = captions[current.src];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${current.title}`}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-ivory"
    >
      <div className="flex items-center justify-between p-4">
        <p className="text-[0.7rem] uppercase tracking-wide2 text-ivory/70">
          {index + 1} / {visuals.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 hover:border-champagne hover:text-champagne"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 px-2 sm:px-4">
        <button
          type="button"
          aria-label="Previous image"
          disabled={index === 0}
          onClick={() => onIndexChange(index - 1)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/30 hover:border-champagne disabled:opacity-30"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-full min-w-0 max-w-full object-contain"
        />
        <button
          type="button"
          aria-label="Next image"
          disabled={index === visuals.length - 1}
          onClick={() => onIndexChange(index + 1)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/30 hover:border-champagne disabled:opacity-30"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="max-h-[28svh] overflow-y-auto px-5 pb-5 pt-4 text-center">
        <p className="font-serif text-xl">{current.title}</p>
        {caption && (
          <p dir="auto" className="mx-auto mt-3 max-w-2xl whitespace-pre-line text-[0.92rem] leading-relaxed text-ivory/80">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
