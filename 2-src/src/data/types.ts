export type CategoryId = 'healthcare' | 'veterinary' | 'restaurant' | 'marketing';

export interface ProjectVisual {
  /** Path under /public. Only reference files that exist. */
  src: string;
  /** Short label shown under the image. */
  title: string;
  alt: string;
}

/** A titled set of samples shown on the page, e.g. "Pink October campaign" or "Website articles". */
export interface VisualGroup {
  title: string;
  /** One or two sentences explaining what these samples are. */
  description: string;
  visuals: ProjectVisual[];
  /** 'wide' shows landscape images (calendars, spreadsheets) large, one or two per row. */
  layout?: 'masonry' | 'wide';
}

export interface Project {
  id: string;
  /** Client or brand name. */
  title: string;
  industry: string;
  categories: CategoryId[];
  /** Matches an entry in experienceData.ts, whose responsibilities appear in the case study. */
  experienceId: string;
  logo?: { src: string; alt: string };
  role: string;
  /** Two or three sentences shown above the gallery. */
  summary: string;
  /** About the client (case study). */
  about: string;
  goal: string;
  /** May be empty, in which case the block is hidden. */
  approach: string[];
  /** Only verified results. Use null when there are none, and the block is hidden. */
  results: string[] | null;
  groups: VisualGroup[];
}

export interface CampaignBlock {
  title: string;
  client?: string;
  role: string;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  title: string;
  /** Employer or brand name. */
  employer: string;
  /** One line describing the business. */
  descriptor: string;
  responsibilities: string[];
  skills: string[];
  /** Optional sub-block, e.g. the Nusuk campaign under Najm Digital Marketing. */
  campaign?: CampaignBlock;
  note?: string;
  /** Hidden entries are not rendered anywhere. */
  hidden?: boolean;
}

export interface Skill {
  number: string;
  title: string;
}

export interface ToolGroup {
  label: string;
  items: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  detail?: string;
  period?: string;
}

export interface Brand {
  name: string;
  logo: string;
  note?: string;
}
