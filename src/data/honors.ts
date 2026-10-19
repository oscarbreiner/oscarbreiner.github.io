export type HonorEntry = {
  title: string;
  detail: string;
  year?: string;
  href?: string;
};

export const honors: HonorEntry[] = [
  {
    title: 'Top 3 – NeurIPS 2026 RealPDE Competition',
    detail: 'Oral presentation and workshop paper at NeurIPS 2026.',
    year: '2026',
    href: '/projects/neurips-2026-realpde-competition'
  },
  {
    title: 'A2RL Autonomous Racing World Champion',
    detail: 'Built the 4D radar perception and localization pipeline. F1 Circuit Abu Dhabi.',
    year: '2025',
    href: '/projects/4d-radar-localization-perception'
  },
  {
    title: 'Deutschlandstipendium',
    detail: 'German National Scholarship, awarded to the top 1.2% of students nationwide.'
  },
  {
    title: 'German Physical Society Award',
    detail: 'Deutsche Physikalische Gesellschaft (DPG).'
  }
];
