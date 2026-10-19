export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Machine Learning Engineer',
    company: 'BMW Group',
    location: 'Munich, Germany',
    start: 'Sep 2024',
    end: 'May 2026',
    bullets: [
      'Improved performance of multimodal ML systems.',
      'Designed MLOps infrastructure to boost engineering productivity and reduce compute and operational costs.',
      'Consulted teams on ML modeling, training strategies, and evaluation under real-world system constraints.'
    ],
    tech: ['Multimodal', 'MLOps', 'Deep Learning', 'Data Engineering']
  },
  {
    role: 'AI Team Lead',
    company: 'WARR Student Club at TUM',
    location: 'Munich, Germany',
    start: '2023',
    end: '2024',
    bullets: [
      'Contributed to a satellite mission launched in 2024 as part of WARR, TUM’s largest space engineering student organization.',
      'Led a team of 5 developing machine learning models for space debris impact prediction.',
      'Previously developed embedded flight software for microcontrollers and satellite subsystems using C++ and ARM Assembly under mission constraints.'
    ],
    tech: ['Deep Learning', 'Leadership', 'Embedded Systems']
  },
  {
    role: 'Deep Learning Engineer (Bachelor’s Thesis)',
    company: 'Radar Detection Startup (ActLabs)',
    location: 'Munich, Germany',
    start: 'Oct 2023',
    end: 'Mar 2024',
    bullets: [
      'Bachelor’s thesis in collaboration with TUM on deep learning for space debris detection.',
      'Demonstrated that deep learning can detect space debris using simulated radar signals from satellite-mounted sensors.',
      'Simulated I/Q radar signals based on radar cross-section models to validate feasibility of radar-based sensing.'
    ],
    tech: ['Radar', 'Deep Learning', 'Signal Processing']
  },
  {
    role: 'iOS Software Engineer',
    company: 'Bosch Siemens Home Appliances (BSH)',
    location: 'Munich, Germany',
    start: 'Oct 2022',
    end: 'Feb 2023',
    bullets: [
      'Developed an iOS application from scratch using Swift and Google Firebase in collaboration with Apple Munich.',
      'Implemented 3D scanning, mapping, and augmented reality (AR) features.',
    ],
    tech: ['Swift', 'Firebase', '3D Scanning', 'AR']
  },
  {
    role: 'Teaching Assistant',
    company: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2021',
    end: 'Aug 2022',
    bullets: [
      'Graded 1,000+ exams and assignments for large-scale software engineering courses.',
      'Taught weekly review sessions and mentored student project teams.',
      'Supported teaching activities in computer science and engineering coursework.'
    ],
    tech: ['Teaching', 'Computer Science', 'Mentoring']
  }
];
