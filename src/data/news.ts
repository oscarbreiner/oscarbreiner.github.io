export type NewsEntry = {
  date: string;
  text: string;
  href?: string;
};

// Newest first. Shown in the "News" section on the homepage.
export const news: NewsEntry[] = [
  {
    date: 'Dec 2026',
    text: 'Upcoming: oral presentation of our RealPDE solution at the NeurIPS 2026 competition workshop in Sydney (Dec 11).',
    href: '/projects/neurips-2026-realpde-competition'
  },
  {
    date: 'Oct 2026',
    text: 'Top 3 in the NeurIPS 2026 RealPDE Competition on Scientific ML for real-world fluid dynamics.',
    href: '/projects/neurips-2026-realpde-competition'
  },
  {
    date: 'Jun 2026',
    text: 'Started my master’s thesis as a visiting researcher at the Oxford PIXL Lab (Prof. Ronald Clark), in collaboration with the TUM 3D AI Lab (Prof. Angela Dai).',
    href: '/projects/trellis-image-to-3d-audit'
  },
  {
    date: '2025',
    text: 'Won the A2RL Autonomous Racing World Championship at the F1 Circuit Abu Dhabi as part of the team; I built its 4D radar perception and localization pipeline.',
    href: '/projects/4d-radar-localization-perception'
  }
];
