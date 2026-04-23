export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const profiles = [
  { name: 'LeetCode', rating: '1850+', solved: '650+', rank: 'Top 12%', progress: 84, link: '#' },
  { name: 'Codeforces', rating: '1480+', solved: '350+', rank: 'Specialist (Peak)', progress: 68, link: '#' },
  { name: 'CodeChef', rating: '1800+', solved: '300+', rank: '4★', progress: 72, link: '#' },
  { name: 'GeeksforGeeks', rating: 'Top 5%', solved: '450+', rank: 'Institute Rank 18', progress: 77, link: '#' }
];

export const skillGroups = {
  Languages: ['Python', 'Java', 'C++', 'C', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  Frameworks: ['React.js', 'Tailwind CSS', 'NumPy', 'Matplotlib'],
  Tools: ['Git', 'GitHub', 'MySQL', 'PostgreSQL', 'Firebase', 'Jupyter'],
  Core: ['DSA', 'OOP']
};

export const projects = [
  {
    title: 'AlgoLib (Founder)',
    description:
      'DSA visualization platform for 800+ users featuring live contests, interactive editorials, and progress analytics.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    live: '#'
  },
  {
    title: 'XYNC Project Management System',
    description:
      'Full-stack project dashboard with PostgreSQL persistence, Firebase authentication, and real-time task tracking.',
    stack: ['React', 'PostgreSQL', 'Firebase'],
    github: '#',
    live: '#'
  },
  {
    title: 'Digital Voter Registration System',
    description:
      'Desktop application for secure voter onboarding with validation flows, record management, and MySQL integration.',
    stack: ['Python', 'Tkinter', 'MySQL'],
    github: '#',
    live: '#'
  }
];
