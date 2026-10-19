export type EducationEntry = {
  degree: string;
  university: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'Master’s Thesis (Research Visit)',
    university: 'University of Oxford – PIXL Lab',
    location: 'Oxford, United Kingdom',
    start: 'Jun 2026',
    end: 'Dec 2026',
    highlights: [
      '3D Vision research on image-to-3D generation under Prof. Ronald Clark.',
      'Joint collaboration with the 3D AI Lab of Prof. Angela Dai (TUM).'
    ]
  },
  {
    degree: 'M.Sc. Informatics',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Apr 2024',
    end: 'Present',
    highlights: [
      'Research focus: AI for Vision & Robotics, 3D Reconstruction, Physics-informed ML.'
    ]
  },
  {
    degree: 'B.Sc. Informatics',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2020',
    end: 'Mar 2024',
    highlights: [
      'Strong foundation in mathematics and computer science.',
      'Minor in Electrical Engineering.'
    ]
  },
  {
    degree: 'Allgemeines Abitur / Highschool Diploma',
    university: 'Gymnasium Eltville',
    location: 'Eltville, Germany',
    start: 'Sep 2011',
    end: 'Jul 2020',
    highlights: [
    ]
  }
];
