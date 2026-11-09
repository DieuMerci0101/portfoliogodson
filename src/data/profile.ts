export const profile = {
  firstName: 'Godson',
  lastName: 'PATAM',
  fullName: 'Esso-wazam Godson PATAM',
  role: 'Développeur Full-Stack',
  tagline:
    "Je conçois des applications web performantes, évolutives et soignées — du back-end à l'interface.",
  bio: "Développeur Full-Stack passionné par la conception et le développement d'applications web performantes, évolutives et maintenables. J'ai une expérience pratique dans des projets intégrant le front-end et le back-end, ainsi que des compétences en design graphique, montage vidéo et création de contenus numériques assistée par l'IA.",
  location: 'Lomé, Togo',
  availability: 'Disponible à plein temps',
  email: 'patgodson01@gmail.com',
  phone: '+228 70 11 89 93',
  phoneRaw: '+22870118993',
  birth: '31/10/2005',
  nationality: 'Togolaise',
  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],
  stats: [
    { value: 2, suffix: '+', label: "années d'expérience" },
    { value: 6, suffix: '+', label: 'projets déployés' },
    { value: 2, suffix: '', label: 'entreprises' },
    { value: 100, suffix: '%', label: 'engagement' },
  ],
  atouts: [
    'Polyvalence technique',
    'Compréhension des bases de données',
    'Maîtrise du front-end & back-end',
    'Créativité & sens du détail',
  ],
  interests: ['Lecture', 'Football', 'Voyage', 'Musique', 'Photographie'],
}

export const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/esso-wazam-godson-patam-a93326388?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    handle: 'Esso-wazam Godson PATAM',
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DieuMerci0101',
    handle: '@DieuMerci0101',
    color: '#161513',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@godsonpatam?si=028CzAGZD68_BPMD',
    handle: '@godsonpatam',
    color: '#FF0000',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18cdHw99pG/?mibextid=wwXIfr',
    handle: '@Godson Patam',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/godson_casch?utm_source=qr',
    handle: '@godson_casch',
    color: '#E4405F',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@godson01_1?_r=1&_t=ZS-9BD52R2hnzF',
    handle: '@godson01_1',
    color: '#161513',
  },
] as const

export const navLinks = [
  { label: 'À propos', href: '#apropos', index: '01' },
  { label: 'Projets', href: '#projets', index: '02' },
  { label: 'Services', href: '#services', index: '03' },
  { label: 'Parcours', href: '#parcours', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
]

export type ProjectCategory = 'Tous' | 'Full-stack' | 'Front-end'

export type Project = {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'Tous'>
  description: string
  tags: string[]
  image: string
  href: string
  year: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'togo-truck-connect',
    title: 'Togo Truck Connect',
    category: 'Full-stack',
    description:
      'Plateforme de mise en relation entre transporteurs et clients, pensée pour simplifier la logistique au Togo.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'API REST'],
    image: '/projects/togo-truck-connect.jpg',
    href: 'https://frontend-truck-zone-togo.vercel.app/',
    year: '2026',
    featured: true,
  },
  {
    id: 'eventia',
    title: 'Eventia',
    category: 'Full-stack',
    description:
      "Plateforme événementielle complète : billetterie, paiements et contrôle d'accès par QR code.",
    tags: ['React', 'NestJS', 'PostgreSQL', 'QR Code'],
    image: '/projects/eventia.jpg',
    href: 'https://eventia-beige.vercel.app',
    year: '2026',
    featured: true,
  },
  {
    id: 'gestion-projet',
    title: 'Gestion de projets & tâches',
    category: 'Full-stack',
    description:
      'Application web de pilotage de projets et de tâches, avec une interface claire et une API performante.',
    tags: ['React', 'FastAPI', 'Python', 'API REST'],
    image: '/projects/gestion-projet.jpg',
    href: 'https://frontend-gestion-projet.vercel.app/',
    year: '2025',
  },
  {
    id: 'gestion-produit',
    title: 'Gestion de produits',
    category: 'Full-stack',
    description:
      'Interface d’administration et API pour gérer un catalogue produits de bout en bout.',
    tags: ['React', 'API REST', 'CRUD'],
    image: '/projects/gestion-produit.jpg',
    href: 'https://frontend-produit.vercel.app/',
    year: '2025',
  },
  {
    id: 'portfolio',
    title: 'Portfolio interactif',
    category: 'Front-end',
    description:
      'Site personnel moderne et responsive, pensé comme une carte de visite numérique.',
    tags: ['React', 'React Router', 'Tailwind CSS'],
    image: '/projects/portfolio-actuel.jpg',
    href: 'https://dazzling-pavlova-82cf89.netlify.app/',
    year: '2025',
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    category: 'Front-end',
    description:
      'Gestionnaire de tâches interactif avec une expérience fluide et une interface épurée.',
    tags: ['JavaScript', 'React', 'CSS'],
    image: '/projects/todo-list.jpg',
    href: 'https://godson70118993.github.io/todo-list/',
    year: '2024',
  },
]

export const services = [
  {
    number: '01',
    title: 'Développement web full-stack',
    description:
      'Sites et applications sur mesure avec React, Next.js, Node.js et NestJS. Du prototype à la mise en production.',
    tags: ['React', 'Next.js', 'NestJS'],
    icon: 'code',
  },
  {
    number: '02',
    title: 'API & back-end',
    description:
      'Conception d’API REST robustes, authentification, bases de données SQL/NoSQL et logique métier fiable.',
    tags: ['FastAPI', 'PostgreSQL', 'JWT'],
    icon: 'server',
  },
  {
    number: '03',
    title: 'Design & contenus',
    description:
      'Interfaces UI/UX, identités visuelles, affiches, montage vidéo et contenus numériques assistés par l’IA.',
    tags: ['UI/UX', 'Design', 'Vidéo'],
    icon: 'palette',
  },
  {
    number: '04',
    title: 'Support & maintenance',
    description:
      'Diagnostic, maintenance informatique, optimisation des performances et accompagnement technique.',
    tags: ['Support IT', 'Docker', 'Optimisation'],
    icon: 'wrench',
  },
] as const

export const skillGroups = [
  {
    title: 'Front-end',
    icon: 'layout',
    accent: 'terracotta',
    skills: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Back-end',
    icon: 'server',
    accent: 'olive',
    skills: ['Node.js', 'NestJS', 'Python (FastAPI)', 'Java (Spring Boot)', 'API REST', 'JWT'],
  },
  {
    title: 'Bases de données',
    icon: 'database',
    accent: 'ochre',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLAlchemy', 'Supabase', 'Firebase'],
  },
  {
    title: 'DevOps & outils',
    icon: 'terminal',
    accent: 'ink',
    skills: ['Docker', 'Git / GitHub', 'Vercel', 'Netlify', 'Tests unitaires', 'Méthodes agiles'],
  },
  {
    title: 'Design & audiovisuel',
    icon: 'palette',
    accent: 'terracotta',
    skills: ['Conception graphique', 'Affiches', 'Montage vidéo', 'Contenus IA', 'Photographie'],
  },
  {
    title: 'Savoir-être',
    icon: 'sparkles',
    accent: 'olive',
    skills: ['Polyvalence', 'Esprit analytique', 'Organisation', 'Travail en équipe', 'Créativité'],
  },
] as const

export const experience = [
  {
    role: 'Développeur Full-Stack',
    company: 'Numerum Dev Center',
    location: 'Adidogomé, Lomé',
    period: 'Juin 2026 — Sept. 2026',
    summary:
      'Conception et développement de deux plateformes web complètes, du front-end à la base de données.',
    bullets: [
      'Togo Truck Connect — plateforme de mise en relation pour le transport.',
      'Eventia — billetterie, paiements et contrôle d’accès par QR code.',
    ],
    tags: ['React', 'NestJS', 'PostgreSQL', 'API REST'],
  },
  {
    role: 'Développeur Full-Stack',
    company: 'KofCorporation',
    location: 'Agoè, Lomé',
    period: 'Juin 2025 — Août 2025',
    summary:
      'Développement d’applications web de gestion avec React.js et FastAPI.',
    bullets: [
      'Application de gestion de projets et de tâches.',
      'Application de gestion de produits avec interface React et API back-end.',
    ],
    tags: ['React', 'FastAPI', 'Python'],
  },
  {
    role: 'Licence en Génie Logiciel',
    company: 'Institut Polytechnique Defitech',
    location: 'Lomé, Togo',
    period: '2023 — 2026',
    summary:
      'Formation full-stack : développement web, bases de données, réseaux et génie logiciel.',
    bullets: ['Projets académiques et personnels en équipe.', 'Spécialisation front-end & back-end.'],
    tags: ['Génie logiciel', 'Bases de données', 'Réseaux'],
  },
] as const

export const certifications = [
  {
    title: 'Gestion de projet, cloud & cybersécurité',
    org: 'Coursera',
    date: 'Nov. 2025',
    type: 'Certification',
  },
  {
    title: 'Leadership, discipline & compétences transversales',
    org: 'Compassion International Togo',
    date: 'Déc. 2025',
    type: 'Atelier intensif',
  },
  {
    title: 'Licence en Génie Logiciel',
    org: 'Institut Polytechnique Defitech',
    date: '2023 — 2026',
    type: 'Diplôme',
  },
] as const

export const marqueeTech = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'NestJS',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'Tailwind CSS',
  'Angular',
  'Figma',
  'Git',
]
