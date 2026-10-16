# Toqa Fathey — Portfolio

React + TypeScript + Tailwind + Three.js. Original colours: charcoal #171717, ink #101010, gold accents.

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build into dist/
```

## Publish to GitHub

This folder fully replaces the earlier version. Copy its contents over your repo, then:

```bash
npm install && npm run build
git add -A
git commit -m "Update portfolio: galleries, case studies, navy theme"
git push
```

## Where to edit things

| What | File |
| --- | --- |
| Name, headline, contact, CV path, SEO | `src/data/siteConfig.ts` |
| Skills (17), tools, brands, approach, education | `src/data/content.ts` |
| Experience (also feeds the 3D timeline) | `src/data/experienceData.ts` |
| Clients, case-study text, image groups | `src/data/projects.ts` |
| **Image captions** | `src/data/captions.ts` |
| Image width/height (prevents layout shift) | `src/data/imageSizes.ts` |
| Colours | `tailwind.config.js` |

## Portfolio structure

- Each client is a section on the page: logo, description, role, and **all of its images in galleries outside the case study**.
- Images keep their natural proportions (no cropping). Click one to open the full-size viewer (arrows, Esc).
- "Read the case study" opens a text-only dialog: about the client, goal, responsibilities, approach, results.
- Only confirmed results are shown. Where a client has none (C.la.v57, Najm/LA), the Results block is hidden.

## Adding captions

Open `src/data/captions.ts` and add one line per image, keyed by its path:

```ts
export const captions: Record<string, string> = {
  '/images/portfolio/veterinary/vet-home-01-....webp': 'Caption text here.',
};
```

Arabic captions work and the text direction is detected automatically. Captions appear in the full-size viewer.
Images without a caption simply show their title.

## Adding a new image

Put a `.webp` in `public/images/portfolio/...`, add it to the right group in `projects.ts`, and add its
width/height to `imageSizes.ts`.

## Open points to confirm

- Captions for each post (to be supplied).
- Najm / LA Marketing has only two design concepts; they are labelled as concepts, not campaign results.
- Content-calendar screenshots are intentionally not used (they may contain client data).
- Phone numbers and location are shown in Contact; remove them in `siteConfig.ts` if you prefer.

## How the Three.js timeline works

- `experienceData.ts` defines the entries. `ExperienceTimeline` takes every entry that is not hidden and passes the employer names to the scene.
- `SceneController` builds the scene: perspective camera, ambient/key/rim lights, a moving focus light, a curved
  path (`TimelinePath`), one faceted marker per entry (`TimelineMilestone`, sharing geometry), and a few particles.
- Hover or click on a marker highlights it and selects its entry; the HTML milestone buttons below the scene do the
  same, support arrow keys, Home/End, and mirror hover into the scene. The detail panel is plain HTML with
  previous/next/deselect controls.
- Scrolling reveals the gold path and selects the matching milestone until you choose one yourself
  ("Follow scroll again" resumes). Scrolling is never intercepted.
- The scene mounts only near the viewport, loads lazily, pauses rendering when offscreen, renders on demand with
  `prefers-reduced-motion` (no camera movement, no particles), and disposes geometries, materials, listeners, the
  renderer and the WebGL context on unmount.
- Phones (under 768px) and devices without WebGL get a 2D timeline with the same content.
- Adding or editing a role means editing `experienceData.ts` only. The scene adapts to the number of entries.
