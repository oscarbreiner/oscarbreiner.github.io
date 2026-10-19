export const siteData = {
  name: 'Oscar Breiner',
  tagline: 'Theory-first when it matters. System-first when it counts.',
  location: 'Munich, Germany',
  email: '',
  githubUrl: 'https://github.com/oscarbreiner',
  linkedinUrl: 'https://linkedin.com/in/oscarbreiner',
  cvPath: 'cv.pdf',
  // Set to true to show the "Download CV" buttons again.
  showCv: false,
  heroChips: ['Machine Learning', 'Perception', 'Embodied AI', 'AI in Vision, Physics, and Robotics'],
  role: 'AI & Perception Researcher',
  affiliations: [
    { title: 'M.Sc. Informatics', org: 'Technical University of Munich' },
    { title: 'Visiting Researcher', org: 'University of Oxford · PIXL Lab' }
  ],
  bio: 'I build perception and 3D understanding for systems that operate in the real world: from 4D radar localization at 250+ km/h to image-to-3D generation and scientific machine learning on real fluid measurements.',
  heroHighlights: [
    { label: 'NeurIPS 2026', value: 'Oral + Workshop Paper', href: '/projects/neurips-2026-realpde-competition' },
    { label: 'A2RL 2025', value: 'World Champion', href: '/projects/4d-radar-localization-perception' },
    { label: 'Deutschlandstipendium', value: 'Top 1.2% nationwide' }
  ],
  heroImageCaption: 'A2RL 2025 World Champions · Abu Dhabi',
};

export const seo = {
  title: `${siteData.name} | AI & Perception Research`,
  description: 'Portfolio of Oscar Breiner: AI, perception, radar, 3D vision, and robotics research with production-focused engineering.',
  ogImage: 'images/profile.jpeg'
};
