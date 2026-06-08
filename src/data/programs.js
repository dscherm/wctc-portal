// The 7 CTE programs. Placeholder scaffold — every field has the correct shape;
// replace TODO content (and add real teacher photos to public/assets/) later.
//
// Each program renders all 6 spec-required sections:
//   overview · teacher info · course sequence · certifications · careers · student work

const placeholderTeacher = (program) => ({
  name: 'TODO: Teacher Name',
  title: `${program} Instructor`,
  email: 'TODO: teacher@wctc.edu',
  phone: 'TODO: (000) 000-0000',
  photo: null, // TODO: /assets/teachers/<name>.jpg
  bio: 'TODO: Short instructor bio — background, industry experience, and what students can expect.',
})

const placeholderSequence = [
  { grade: 'Freshman', courses: ['TODO: Intro course'] },
  { grade: 'Sophomore', courses: ['TODO: Level 1 course'] },
  { grade: 'Junior', courses: ['TODO: Level 2 course'] },
  { grade: 'Senior', courses: ['TODO: Capstone / advanced course'] },
]

const base = (name, icon, color) => ({
  icon,
  color,
  overview: `TODO: Overview of the ${name} program — what students learn, hands-on experiences, and what makes it distinctive.`,
  teachers: [placeholderTeacher(name)],
  sequence: placeholderSequence,
  certifications: ['TODO: Certification or credential offered'],
  careers: ['TODO: Related career opportunity'],
  studentWork: [
    {
      title: 'TODO: Student project / accomplishment',
      description: 'TODO: Description or example of student work.',
      image: null,
    },
  ],
})

export const programs = [
  {
    slug: 'video-production',
    name: 'Video Production',
    tagline: 'Filmmaking, editing & media production',
    ...base('Video Production', '🎬', 'var(--wctc-blue)'),
  },
  {
    slug: 'child-studies',
    name: 'Child Studies',
    tagline: 'Early childhood education & development',
    ...base('Child Studies', '🧸', 'var(--wctc-red)'),
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    tagline: 'Vehicle service, repair & diagnostics',
    ...base('Automotive', '🔧', 'var(--wctc-yellow)'),
  },
  {
    slug: 'construction',
    name: 'Construction',
    tagline: 'Building trades & real-world projects',
    ...base('Construction', '🏗️', 'var(--wctc-green)'),
  },
  {
    slug: 'criminal-justice',
    name: 'Criminal Justice',
    tagline: 'Law enforcement, legal studies & careers',
    ...base('Criminal Justice', '⚖️', 'var(--wctc-blue)'),
  },
  {
    slug: 'business',
    name: 'Business',
    tagline: 'Entrepreneurship, marketing & business tech',
    ...base('Business', '📈', 'var(--wctc-red)'),
  },
  {
    slug: 'biotechnology',
    name: 'Biotechnology',
    tagline: 'Lab science, research & career pathways',
    ...base('Biotechnology', '🧬', 'var(--wctc-green)'),
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)

export default programs
