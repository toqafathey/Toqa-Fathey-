import { useState } from 'react';
import type { VisualGroup } from '../../data/types';
import { imageSizes } from '../../data/imageSizes';
import Lightbox from './Lightbox';

/** Masonry gallery that keeps every image at its own proportions (no cropping). Clicking opens the full-size viewer. */
export default function Gallery({ group }: { group: VisualGroup }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-14">
      <div className="mb-6 max-w-2xl">
        <h4 className="font-serif text-2xl">
          {group.title}
          <span className="ml-3 align-middle text-[0.68rem] uppercase tracking-wide2 text-ink/70">
            {group.visuals.length} {group.visuals.length === 1 ? 'item' : 'items'}
          </span>
        </h4>
        <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/80">{group.description}</p>
      </div>

      <ul className={group.layout === 'wide' ? 'grid gap-6 lg:grid-cols-2' : 'columns-2 gap-x-4 sm:columns-3 lg:columns-4'}>
        {group.visuals.map((v, i) => {
          const size = imageSizes[v.src] ?? [4, 5];
          return (
            <li key={v.src} className="mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-haspopup="dialog"
                aria-label={`View full size: ${v.title}`}
                className="group block w-full overflow-hidden border border-charcoal/15 bg-ivory"
              >
                <img
                  src={v.src}
                  alt={v.alt}
                  width={size[0]}
                  height={size[1]}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </button>
              <p className="mt-2 text-[0.75rem] leading-snug text-ink/80">{v.title}</p>
            </li>
          );
        })}
      </ul>

      {openIndex !== null && (
        <Lightbox
          visuals={group.visuals}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
