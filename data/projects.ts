import type { CategoryId, Project, ProjectVisual } from './types';

export const categories: { id: 'all' | CategoryId; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'veterinary', label: 'Veterinary' },
  { id: 'restaurant', label: 'Restaurant & Café' },
  { id: 'marketing', label: 'Marketing' },
];

/** Builds a visual from a file path and a short title. The alt text is generated from the brand and title. */
const make =
  (brand: string, kind: string) =>
  (src: string, title: string): ProjectVisual => ({
    src,
    title,
    alt: `${brand} ${kind}: ${title}`,
  });

const P = '/images/portfolio';

/**
 * Featured projects. All samples are real work. To add a sample, put the image in
 * /public/images/portfolio/..., add its size to imageSizes.ts and list it under `groups`.
 */

const vet = make('Vet Home', 'post');
const am = make('Al Mohamadia Medical Complex', 'design');
const amArticle = make('Al Mohamadia Medical Complex', 'website article');
const clav = make('C.la.v57', 'post');
const la = make('LA Marketing', 'design idea');

export const projects: Project[] = [
  {
    id: 'vet-home',
    title: 'Vet Home',
    industry: 'Veterinary equipment & supplies',
    categories: ['veterinary'],
    experienceId: 'vet-home',
    logo: { src: '/images/brands/vet-home.webp', alt: 'Vet Home logo' },
    role: 'Social Media Management & Content Creation',
    summary:
      'Product-focused social media content for veterinary doctors and clinic owners. The posts present clinic equipment, supplies and clinic setup solutions, from an otoscope and a centrifuge to consumables in an Eid campaign, with a clear professional message in each design.',
    about:
      'Vet Home provides veterinary medical equipment, supplies, and clinic setup solutions. Its audience is veterinary doctors and clinic owners, not general pet owners, so the content speaks to professionals who buy for their clinics.',
    goal: 'Create a consistent social media presence and support sales by reaching the right professional audience.',
    approach: [
      'Refined the content direction to focus on veterinary doctors and clinic owners.',
      'Developed relevant content ideas and product-focused promotional messaging.',
      'Improved visual consistency across the page.',
      'Created content highlighting veterinary equipment, supplies, and clinic setup solutions.',
      'Supported sales efforts through organic content and paid advertising.',
    ],
    results: [
      'Started receiving organic orders through social media.',
      'Improved the consistency and overall appearance of the page.',
      'Developed a clearer content direction for the relevant professional audience.',
      'Supported sales efforts through advertising.',
    ],
    groups: [
      {
        title: 'Product posts',
        description:
          'Posts that present individual products and offers to clinics: what the product does, why it matters in a clinic, and how to order.',
        visuals: [
          vet(`${P}/veterinary/vet-home-01-otoscope.webp`, 'Otoscope: features at a glance'),
          vet(`${P}/veterinary/vet-home-02-diagyl.webp`, 'Diagyl: bulk-order discounts'),
          vet(`${P}/veterinary/vet-home-03-1980s-clinic.webp`, 'Playful post: a retro clinic scene'),
          vet(`${P}/veterinary/vet-home-04-centrifuge.webp`, 'Centrifuge: choosing the right model'),
        ],
      },
      {
        title: 'Eid campaign',
        description:
          'A seasonal campaign built around Eid Al-Adha discounts on clinic consumables, with one concept carried across several posts.',
        visuals: [
          vet(`${P}/veterinary/vet-home-05-eid-alcohol.webp`, 'Eid campaign: alcohol disinfectant sizes'),
          vet(`${P}/veterinary/vet-home-06-eid-surgery.webp`, 'Eid campaign: surgery and infusion equipment'),
          vet(`${P}/veterinary/vet-home-07-eid-gloves.webp`, 'Eid campaign: gloves and consumables'),
          vet(`${P}/veterinary/vet-home-08-eid-offer.webp`, 'Eid campaign: discounts on consumables'),
        ],
      },
    ],
  },
  {
    id: 'al-mohamadia',
    title: 'Al Mohamadia Medical Complex',
    industry: 'Healthcare, Saudi Arabia',
    categories: ['healthcare'],
    experienceId: 'al-mohamadia',
    logo: { src: '/images/brands/al-mohamadia.webp', alt: 'Al Mohamadia Medical Complex logo' },
    role: 'Social Media Management & Content Creation',
    summary:
      "Informative medical content, seasonal campaigns and website articles for a medical complex in Saudi Arabia. The work includes awareness designs, the Pink October and Saudi National Day campaigns, and medical articles written for the complex's newly launched website.",
    about:
      'Al Mohamadia Medical Complex is a medical facility in Saudi Arabia. When I started working on its digital presence, the social media page lacked visual consistency, and bookings remained low even with paid advertising.',
    goal: "Strengthen the brand's digital presence, build patient trust, and increase bookings.",
    approach: [
      'Helped organize the content direction and improve visual consistency.',
      "Focused on informative content and photography that highlighted doctors' expertise, rather than relying only on direct promotional posts.",
      'Adapted relevant trends to the medical field.',
      "Created content for the newly launched website, including doctors' profiles and articles.",
      'Supported consistency between the physical brand identity and digital platforms.',
      'Contributed to content related to conference participation and collaborations.',
    ],
    results: [
      'Patient bookings increased, including bookings through the website.',
      'The brand developed a more consistent presence across physical and digital touchpoints.',
      'The tracked search ranking improved from #14 to #3.',
    ],
    groups: [
      {
        title: 'Everyday content & awareness days',
        description:
          'Informative posts on dental care, insurance, digestive health and awareness days such as World Cancer Day and International Women’s Day.',
        visuals: [
          am(`${P}/healthcare/designs/01-dental-awareness.webp`, 'Dental awareness: sweets and teeth'),
          am(`${P}/healthcare/designs/02-insurance.webp`, 'Insurance accepted, with clinic hours'),
          am(`${P}/healthcare/designs/03-smile-care.webp`, 'Smile care and booking details'),
          am(`${P}/healthcare/designs/04-world-cancer-day.webp`, 'World Cancer Day: lung cancer prevention'),
          am(`${P}/healthcare/designs/05-womens-day.webp`, 'International Women’s Day'),
          am(`${P}/healthcare/designs/06-digestive-health.webp`, 'Digestive health: acid reflux'),
        ],
      },
      {
        title: 'Pink October campaign',
        description:
          'A breast cancer awareness campaign: an awareness-month post, the women’s imaging services, and a series on warning signs to look out for.',
        visuals: [
          am(`${P}/healthcare/pink-october/01-awareness-month.webp`, 'Pink October awareness month'),
          am(`${P}/healthcare/pink-october/02-breast-imaging.webp`, 'Women’s health scans and ultrasound'),
          am(`${P}/healthcare/pink-october/06-five-signs.webp`, 'Five signs not to ignore'),
          am(`${P}/healthcare/pink-october/03-underarm-swelling.webp`, 'Warning sign: underarm swelling'),
          am(`${P}/healthcare/pink-october/04-size-shape-changes.webp`, 'Warning sign: change in size or shape'),
          am(`${P}/healthcare/pink-october/05-skin-changes.webp`, 'Warning sign: skin changes'),
          am(`${P}/healthcare/pink-october/07-nipple-discharge.webp`, 'Warning sign: unusual discharge'),
        ],
      },
      {
        title: 'Saudi National Day campaign',
        description:
          'An offers campaign for Saudi National Day: an announcement, a three-day offer post, and one post for each department.',
        visuals: [
          am(`${P}/healthcare/national-day/01-announcement.webp`, 'Announcement: surprises in all departments'),
          am(`${P}/healthcare/national-day/02-three-days.webp`, 'Three days of offers in all departments'),
          am(`${P}/healthcare/national-day/03-women-obstetrics.webp`, 'Offers: Women & Obstetrics'),
          am(`${P}/healthcare/national-day/04-radiology.webp`, 'Offers: Radiology'),
          am(`${P}/healthcare/national-day/05-surgery.webp`, 'Offers: Surgery'),
          am(`${P}/healthcare/national-day/06-general-medicine.webp`, 'Offers: General Medicine'),
          am(`${P}/healthcare/national-day/07-official-exams.webp`, 'Offers: Official examinations'),
          am(`${P}/healthcare/national-day/08-laboratory.webp`, 'Offers: Laboratory'),
          am(`${P}/healthcare/national-day/09-dental.webp`, 'Offers: Dental'),
          am(`${P}/healthcare/national-day/10-internal-medicine.webp`, 'Offers: Internal Medicine'),
          am(`${P}/healthcare/national-day/11-pediatrics.webp`, 'Offers: Pediatrics'),
        ],
      },
      {
        title: 'Content calendars',
        description:
          'The monthly content plan I built for the complex: a visual calendar of world health days, posts and reels, and the planning sheet used to track each post (type, objective, department, caption and status). Click an image to read it in full.',
        layout: 'wide',
        visuals: [
          am(`${P}/healthcare/calendars/01-monthly-calendar.webp`, 'Monthly social media content calendar'),
          am(`${P}/healthcare/calendars/02-tracker-sheet-top.webp`, 'Content planning sheet: dates, post types, objectives, captions'),
          am(`${P}/healthcare/calendars/03-tracker-sheet-detail.webp`, 'Content planning sheet: statuses and responsibilities'),
        ],
      },
      {
        title: 'Website articles: Pink October',
        description:
          'Articles written for the newly launched website on breast cancer awareness and early screening (screenshots of the live pages on mobile).',
        visuals: [
          amArticle(`${P}/seo/articles/pink-october-01-guide.webp`, 'Pink October guide: awareness and early screening'),
          amArticle(`${P}/seo/articles/pink-october-02-guide-full.webp`, 'Pink October guide on the website'),
          amArticle(`${P}/seo/articles/pink-october-03-why-october.webp`, 'Why October is awareness month'),
          amArticle(`${P}/seo/articles/pink-october-04-symptoms.webp`, 'What are the symptoms of breast cancer?'),
          amArticle(`${P}/seo/articles/pink-october-05-what-is.webp`, 'What is breast cancer?'),
        ],
      },
      {
        title: 'Website articles: medical topics',
        description:
          'Informative, SEO-oriented medical articles across women’s health, dental care, children’s health and general tests (screenshots of the live pages on mobile).',
        visuals: [
          amArticle(`${P}/seo/articles/medical-01.webp`, 'Ovarian reserve tests and fertility'),
          amArticle(`${P}/seo/articles/medical-02.webp`, 'Delayed pregnancy: key tests and scans'),
          amArticle(`${P}/seo/articles/medical-03.webp`, 'Bone health after menopause'),
          amArticle(`${P}/seo/articles/medical-04.webp`, 'Early detection of cervical cancer'),
          amArticle(`${P}/seo/articles/medical-05.webp`, 'Pregnancy hormone tests and early scans'),
          amArticle(`${P}/seo/articles/medical-06.webp`, '4D sonar: features and when it is needed'),
          amArticle(`${P}/seo/articles/medical-07.webp`, 'Hormone tests'),
          amArticle(`${P}/seo/articles/medical-08.webp`, 'Ovulation tracking'),
          amArticle(`${P}/seo/articles/medical-09.webp`, 'Roaccutane and liver health'),
          amArticle(`${P}/seo/articles/medical-10.webp`, 'Vitamins D and B12'),
          amArticle(`${P}/seo/articles/medical-11.webp`, 'Breast health: when to get an exam'),
          amArticle(`${P}/seo/articles/medical-12.webp`, 'Cosmetic dental fillings'),
          amArticle(`${P}/seo/articles/medical-13.webp`, 'Regular dental check-ups'),
          amArticle(`${P}/seo/articles/medical-14.webp`, 'Newborn jaundice'),
          amArticle(`${P}/seo/articles/medical-15.webp`, 'Key tests for your child'),
          amArticle(`${P}/seo/articles/medical-16.webp`, 'Fluoride for children’s teeth'),
        ],
      },
    ],
  },
  {
    id: 'clav57',
    title: 'C.la.v57',
    industry: 'Restaurant & café',
    categories: ['restaurant'],
    experienceId: 'clav57',
    logo: { src: '/images/brands/clav57.webp', alt: 'C.la.v57 logo' },
    role: 'Social Media Specialist & Content Creator',
    summary:
      'Creative content and campaign ideas for a restaurant and café brand. The designs use bold, imaginative scenes for drinks and promote ordering through the brand’s delivery app.',
    about:
      'C.la.v57 is a restaurant and café brand. My work covered social media content, creative concepts for designs and branding, and following up on photography and visual production.',
    goal: 'Keep the brand’s social media content creative and consistent, and focused on its drinks, offers and delivery app.',
    approach: [
      'Wrote social media content and captions.',
      'Developed creative concepts for designs and branding.',
      'Contributed campaign and promotional ideas.',
      'Followed up on photography and visual content production.',
      'Provided creative direction for food photography and brand visuals.',
    ],
    results: null,
    groups: [
      {
        title: 'Social media designs',
        description:
          'Posts that promote ordering through the delivery app, a prize wheel offer, and imaginative drink concepts.',
        visuals: [
          clav(`${P}/restaurant/clav57-01-delivery-app.webp`, 'Order through the delivery app'),
          clav(`${P}/restaurant/clav57-02-prize-wheel.webp`, 'Prize wheel promotion'),
          clav(`${P}/restaurant/clav57-03-pyramids-drink.webp`, 'Signature drink concept: the Pyramids'),
          clav(`${P}/restaurant/clav57-04-app-ordering.webp`, 'Easy ordering through the app'),
          clav(`${P}/restaurant/clav57-05-ocean-drink.webp`, 'Drink concept: ocean refreshment'),
          clav(`${P}/restaurant/clav57-06-space-drink.webp`, 'Drink concept: out of this world'),
        ],
      },
    ],
  },
  {
    id: 'najm',
    title: 'Najm Digital Marketing',
    industry: 'Digital marketing agency',
    categories: ['marketing'],
    experienceId: 'najm',
    logo: { src: '/images/brands/najm.webp', alt: 'Najm Digital Marketing logo' },
    role: 'Social Media Specialist & Content Creator',
    summary:
      'Content and post ideas, design briefs and design reviews for client accounts at a digital marketing agency. The samples here are design ideas for LA Marketing, one of the agency’s clients.',
    about:
      'Najm Digital Marketing is a digital marketing agency working with multiple client accounts. I supported those accounts with social media content, design briefs, design reviews and advertising tasks. LA Marketing is one of its clients.',
    goal: 'Turn client needs into clear content and post ideas, and brief designers so the visuals match.',
    approach: [
      'Developed content and post ideas.',
      'Prepared design briefs and written content for designers.',
      'Reviewed designs and provided revisions.',
      'Supported social media advertising campaigns.',
      'Reviewed advertising numbers and analyzed campaign performance.',
    ],
    results: null,
    groups: [
      {
        title: 'LA Marketing: design ideas',
        description:
          'Design ideas for a client of Najm Digital Marketing. They are concepts, not published campaign results.',
        visuals: [
          la(`${P}/advertising/la-marketing-01-influencers.webp`, 'Make your project stand out with influencers'),
          la(`${P}/advertising/la-marketing-02-restaurant.webp`, 'Your restaurant, first choice'),
        ],
      },
    ],
  },
];
