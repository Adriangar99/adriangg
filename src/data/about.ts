import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  items: string[];
}

export interface EducationEntry {
  center: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

const skills: Record<Lang, SkillGroup[]> = {
  es: [
    { category: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Swift', 'Kotlin', 'HTML', 'CSS', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'SwiftUI', 'UIKit', 'Jetpack Compose'] },
    { category: 'Backend', items: ['Node.js', 'NestJS', '.NET Core', 'GraphQL', 'PostgreSQL'] },
    { category: 'Herramientas', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Cloudflare', 'Vite', 'Webpack', 'Storybook'] },
    { category: 'Testing', items: ['TDD', 'XCTest', 'Swift Testing', 'Jest', 'Vitest', 'Playwright', 'Cypress'] },
  ],
  en: [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Swift', 'Kotlin', 'HTML', 'CSS', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'SwiftUI', 'UIKit', 'Jetpack Compose'] },
    { category: 'Backend', items: ['Node.js', 'NestJS', '.NET Core', 'GraphQL', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Cloudflare', 'Vite', 'Webpack', 'Storybook'] },
    { category: 'Testing', items: ['TDD', 'XCTest', 'Swift Testing', 'Jest', 'Vitest', 'Playwright', 'Cypress'] },
  ],
};

const experience: Record<Lang, ExperienceEntry[]> = {
  es: [
    {
      company: 'Acid Tango S.L.',
      role: 'Software Developer',
      period: 'Dic. 2021 — Presente',
      location: 'Santa Cruz de Tenerife, España',
      items: [
        'Desarrollo de la aplicación iOS de Zara (Inditex): implementación de nuevas funcionalidades y mejoras en el módulo de Checkout, aplicando técnicas de modernización como el uso de SPMs para aislar lógicas y reutilizarlas en otros proyectos de Inditex.',
        'Contribución al proyecto Samsung Unfear para Android con Kotlin y Jetpack Compose: aplicación para ayudar a personas con trastorno del espectro autista a gestionar sonidos fuertes mediante la cancelación de ruido de Galaxy Buds. Desarrollo de la lógica de reconocimiento de sonidos y diseño visual.',
        'Desarrollo frontend de varios backoffices web con Next.js, aplicando diseño accesible, optimización de rendimiento y caching de peticiones de red.',
        'Aplicación de metodologías como DDD y TDD para garantizar la calidad, legibilidad y sostenibilidad del código.',
      ],
    },
    {
      company: 'TECH Universidad Tecnológica',
      role: 'Software Developer',
      period: 'Oct. 2021 — Dic. 2021',
      location: 'Santa Cruz de Tenerife, España',
      items: [
        'Desarrollo de aplicaciones web de uso interno con TypeScript, Angular, Node.js y API REST.',
        'Creación de interfaces frontend siguiendo guías de código limpio y buenas prácticas.',
      ],
    },
    {
      company: 'Itop Consulting',
      role: 'Web Developer',
      period: 'Sep. 2020 — Oct. 2021',
      location: 'Santa Cruz de Tenerife, España',
      items: [
        'Implementación de micro frontends con Module Federation (Webpack 5).',
        'Diseño e implementación de arquitectura de microservicios para un producto propio.',
        'Stack: TypeScript, React, Node.js, GraphQL, NestJS, Apollo Client, Ant Design y PostgreSQL.',
      ],
    },
    {
      company: 'Itop Consulting',
      role: 'Web Developer (Prácticas)',
      period: 'Jul. 2020 — Ago. 2020',
      location: 'Santa Cruz de Tenerife, España',
      items: [
        'Prácticas profesionales en desarrollo web con tecnologías frontend y backend.',
      ],
    },
  ],
  en: [
    {
      company: 'Acid Tango S.L.',
      role: 'Software Developer',
      period: 'Dec. 2021 — Present',
      location: 'Santa Cruz de Tenerife, Spain',
      items: [
        'Development of the Zara (Inditex) iOS application: implementation of new features and improvements to the Checkout module, applying modernisation techniques such as SPMs to isolate logic and reuse it across other Inditex projects.',
        'Contribution to Samsung Unfear for Android with Kotlin and Jetpack Compose: an application to help people with autism spectrum disorder manage loud sounds using Galaxy Buds noise cancellation. Developed the sound recognition logic and visual design.',
        'Frontend development of several web backoffices with Next.js, applying accessible design, performance optimisation and network request caching.',
        'Application of methodologies such as DDD and TDD to ensure code quality, readability and sustainability.',
      ],
    },
    {
      company: 'TECH Universidad Tecnológica',
      role: 'Software Developer',
      period: 'Oct. 2021 — Dec. 2021',
      location: 'Santa Cruz de Tenerife, Spain',
      items: [
        'Development of internal web applications using TypeScript, Angular, Node.js and REST APIs.',
        'Frontend interface creation following clean code guidelines and best practices.',
      ],
    },
    {
      company: 'Itop Consulting',
      role: 'Web Developer',
      period: 'Sep. 2020 — Oct. 2021',
      location: 'Santa Cruz de Tenerife, Spain',
      items: [
        'Implementation of micro frontends using Module Federation (Webpack 5).',
        'Design and implementation of a microservices architecture for an in-house product.',
        'Stack: TypeScript, React, Node.js, GraphQL, NestJS, Apollo Client, Ant Design and PostgreSQL.',
      ],
    },
    {
      company: 'Itop Consulting',
      role: 'Web Developer (Internship)',
      period: 'Jul. 2020 — Aug. 2020',
      location: 'Santa Cruz de Tenerife, Spain',
      items: [
        'Professional internship in web development with frontend and backend technologies.',
      ],
    },
  ],
};

const education: Record<Lang, EducationEntry[]> = {
  es: [
    {
      center: 'CIFP César Manrique',
      degree: 'CFGS Desarrollo de Aplicaciones Web',
      period: 'Sep. 2018 — Jun. 2020',
      location: 'Santa Cruz de Tenerife, España',
      description:
        'Formación en gestión de bases de datos, programación con Java y JavaScript, metodologías ágiles, control de versiones, administración de sistemas Linux y despliegue de aplicaciones web.',
    },
  ],
  en: [
    {
      center: 'CIFP César Manrique',
      degree: 'Higher Technician in Web Application Development',
      period: 'Sep. 2018 — Jun. 2020',
      location: 'Santa Cruz de Tenerife, Spain',
      description:
        'Training in database management, programming with Java and JavaScript, agile methodologies, version control, Linux system administration and web application deployment.',
    },
  ],
};

export function getSkills(lang: Lang): SkillGroup[] {
  return skills[lang];
}

export function getExperience(lang: Lang): ExperienceEntry[] {
  return experience[lang];
}

export function getEducation(lang: Lang): EducationEntry[] {
  return education[lang];
}
