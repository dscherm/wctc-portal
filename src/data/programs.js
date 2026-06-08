// WACTC CTE programs. The 10 "real" programs mirror the live Woonsocket Area
// Career and Technical Center site (names, pipe-style taglines, and badge tile
// images sourced from woonsocketschools.com). Criminal Justice and Business are
// kept as project extras (no live badge yet — emoji icon + TODO content).
//
// Badge images live in /public/assets/programs/*.jpg (the real WACTC tiles).
// All other fields are placeholder scaffold — every field has the correct shape;
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

const base = (name) => ({
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

// badge: path to the real WACTC program tile (in /public/assets/programs/).
// icon: emoji fallback shown when no badge image exists.
export const programs = [
  {
    slug: 'automotive',
    name: 'Automotive Technology',
    tagline: 'Transportation',
    icon: '🔧',
    color: 'var(--wctc-yellow)',
    badge: '/assets/programs/auto-tech.jpg',
    ...base('Automotive Technology'),
  },
  {
    slug: 'computer-science',
    name: 'Computer Science',
    tagline: 'Game Design · P-TECH',
    icon: '💻',
    color: 'var(--wctc-blue)',
    badge: '/assets/programs/computer-science.jpg',
    ...base('Computer Science'),
  },
  {
    slug: 'digital-media',
    name: 'Digital Media',
    tagline: 'Video, audio & media production',
    icon: '🎬',
    color: 'var(--wctc-blue)',
    badge: '/assets/programs/digital-media.jpg',
    ...base('Digital Media'),
  },
  {
    slug: 'biotechnology',
    name: 'Biotechnology',
    tagline: 'Biomedical',
    icon: '🧬',
    color: 'var(--wctc-green)',
    badge: '/assets/programs/biotechnology.jpg',
    ...base('Biotechnology'),
  },
  {
    slug: 'construction',
    name: 'Construction Technology',
    tagline: 'Home Building · Pre-Engineering',
    icon: '🏗️',
    color: 'var(--wctc-green)',
    badge: '/assets/programs/construction.jpg',
    ...base('Construction Technology'),
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    tagline: 'Printing & Visual Arts',
    icon: '🎨',
    color: 'var(--wctc-red)',
    badge: '/assets/programs/graphic-design.jpg',
    ...base('Graphic Design'),
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    tagline: 'Tourism',
    icon: '🧳',
    color: 'var(--wctc-yellow)',
    badge: '/assets/programs/hospitality.jpg',
    ...base('Hospitality'),
  },
  {
    slug: 'child-studies',
    name: 'Child Studies',
    tagline: 'Human Services',
    icon: '🧸',
    color: 'var(--wctc-red)',
    badge: '/assets/programs/child-studies.jpg',
    ...base('Child Studies'),
  },
  {
    slug: 'culinary-arts',
    name: 'Culinary Arts',
    tagline: 'Baking',
    icon: '🍳',
    color: 'var(--wctc-red)',
    badge: '/assets/programs/culinary-arts.jpg',
    ...base('Culinary Arts'),
  },
  {
    slug: 'health-careers',
    name: 'Health Careers',
    tagline: 'Patient care & medical pathways',
    icon: '⚕️',
    color: 'var(--wctc-green)',
    badge: '/assets/programs/health-careers.jpg',
    ...base('Health Careers'),
  },
  // ---- Project extras (not currently on the live WACTC site) ----
  {
    slug: 'criminal-justice',
    name: 'Criminal Justice',
    tagline: 'Law enforcement, legal studies & careers',
    icon: '⚖️',
    color: 'var(--wctc-blue)',
    badge: null, // TODO: add real badge image if WACTC adds this program
    ...base('Criminal Justice'),
  },
  {
    slug: 'business',
    name: 'Business',
    tagline: 'Entrepreneurship, marketing & business tech',
    icon: '📈',
    color: 'var(--wctc-red)',
    badge: null, // TODO: add real badge image if WACTC adds this program
    ...base('Business'),
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)

export default programs
