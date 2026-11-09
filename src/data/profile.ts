export const profile = {
  firstName: 'Godson',
  lastName: 'PATAM',
  fullName: 'Esso-wazam Godson PATAM',
  role: 'Développeur Full-Stack',
  tagline:
    "Je conçois des sites et applications web rapides, soignés et pensés pour l'utilisateur.",
  bio: "Développeur full-stack basé à Lomé, j'aide les marques et les entrepreneurs à transformer leurs idées en applications web claires, rapides et agréables à utiliser.",
  location: 'Lomé, Togo',
  email: 'patgodson01@gmail.com',
  phone: '+228 70 11 89 93',
  phoneRaw: '+22870118993',
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
  { label: 'Contact', href: '#contact', index: '04' },
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
    title: 'Portfolio personnel',
    category: 'Front-end',
    description:
      'Portfolio éditorial animé, pensé comme une carte de visite : design sur mesure, animations au scroll et expérience responsive.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio-godson.jpg',
    href: 'https://portfoliogodson-jhsv.vercel.app/',
    year: '2026',
  },
  {
    id: 'locomo',
    title: 'LocoMo',
    category: 'Full-stack',
    description:
      'Plateforme de rééducation physique à domicile : coach IA vocal, détection de mouvement par caméra, sessions live et rapports de progression.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MediaPipe Pose', 'PWA'],
    image: '/projects/locomo.jpg',
    href: 'https://locomo-app.vercel.app/',
    year: '2026',
    featured: true,
  },
]

export const services = [
  {
    number: '01',
    title: 'Sites & applications web',
    description:
      'Des sites et applications sur mesure, du premier écran à la mise en production.',
    tags: ['React', 'Next.js', 'NestJS'],
    icon: 'code',
  },
  {
    number: '02',
    title: 'API & back-end',
    description:
      'Des API solides et des bases de données bien pensées pour faire tourner votre produit.',
    tags: ['API REST', 'PostgreSQL', 'Auth'],
    icon: 'server',
  },
  {
    number: '03',
    title: 'Design & contenus',
    description:
      'Des interfaces claires, des identités visuelles et des contenus qui donnent envie.',
    tags: ['UI/UX', 'Design', 'Vidéo'],
    icon: 'palette',
  },
  {
    number: '04',
    title: 'Maintenance & suivi',
    description:
      'Un produit qui reste rapide, fiable et à jour, même après la mise en ligne.',
    tags: ['Support', 'Optimisation', 'Docker'],
    icon: 'wrench',
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
