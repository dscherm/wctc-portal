// Administrative & Student Resource pages. Placeholder scaffold — replace TODO content.
// Each resource page renders a list of sections; a section is { heading, body, items? }.

export const counselor = {
  title: 'School Counselor',
  icon: '🧑‍🏫',
  lede: 'Counseling support for academic planning, graduation, and college & career readiness.',
  sections: [
    {
      heading: 'Counselor Information & Contact',
      body: 'TODO: Counselor name, office location, email, phone, and how to schedule an appointment.',
    },
    {
      heading: 'Graduation Requirements',
      body: 'TODO: Summary of graduation requirements (see the full Graduation Requirements page).',
      items: ['TODO: Credit overview', 'TODO: Required course areas'],
    },
    {
      heading: 'Course Selection Information',
      body: 'TODO: How and when students select courses, prerequisites, and scheduling help.',
    },
    {
      heading: 'Academic Planning Resources',
      body: 'TODO: Tools and resources for building a multi-year academic plan.',
    },
    {
      heading: 'College & Career Planning',
      body: 'TODO: College application support, financial aid, career exploration, and planning resources.',
    },
  ],
}

export const leadership = {
  title: 'Leadership & Activities',
  icon: '📣',
  lede: 'Leadership programs, student opportunities, and school events.',
  sections: [
    {
      heading: 'Leadership Program',
      body: 'TODO: Description of the student leadership program and how to get involved.',
    },
    {
      heading: 'Student Leadership Opportunities',
      body: 'TODO: Student government, ambassador roles, peer mentoring, and other opportunities.',
      items: ['TODO: Opportunity 1', 'TODO: Opportunity 2'],
    },
    {
      heading: 'Events & Activities',
      body: 'TODO: Upcoming events, activities, and how students and families can participate.',
    },
  ],
}

export const graduation = {
  title: 'Graduation Requirements',
  icon: '🎓',
  lede: 'Credits, required courses, and planning resources for students and families.',
  sections: [
    {
      heading: 'Credit Requirements',
      body: 'TODO: Total credits required and breakdown by subject area.',
      items: ['TODO: English — X credits', 'TODO: Math — X credits', 'TODO: Science — X credits'],
    },
    {
      heading: 'Required Courses',
      body: 'TODO: Specific courses every student must complete to graduate.',
    },
    {
      heading: 'Graduation Expectations',
      body: 'TODO: Additional expectations — assessments, service hours, capstone, etc.',
    },
    {
      heading: 'Planning Resources for Students & Families',
      body: 'TODO: Checklists, planning guides, and contacts for families.',
    },
  ],
}

export const programSequences = {
  title: 'Program Sequences',
  icon: '🗺️',
  lede: 'Recommended course pathway for each CTE program, freshman through senior year.',
  // The visual roadmap is rendered on the Program Sequences page from program data.
}

export default { counselor, leadership, graduation, programSequences }
