import type { Lang } from '../i18n/ui';

export interface Project {
  title: string;
  description: string;
  company?: string;
  url?: string;
  tags: string[];
}

const clientProjects: Record<Lang, Project[]> = {
  es: [
    {
      title: 'Zara iOS',
      description:
        'Desarrollo de nuevas funcionalidades y mejoras en el flujo de checkout de la aplicación iOS de Zara. Implementación de Swift Package Modules (SPM) para aislar lógica de negocio y mejorar la mantenibilidad del proyecto.',
      company: 'Acid Tango — Inditex',
      tags: ['Swift', 'SwiftUI', 'UIKit', 'SPM', 'TDD', 'Accesibilidad'],
    },
    {
      title: 'Samsung Unfear',
      description:
        'Aplicación Android para personas con Trastorno del Espectro Autista (TEA) que gestiona la cancelación de ruido de los auriculares Galaxy Buds ante sonidos fuertes o inesperados.',
      company: 'Acid Tango — Samsung',
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    },
    {
      title: 'Backoffices web',
      description:
        'Desarrollo de herramientas de backoffice para la gestión interna de clientes. Enfoque en accesibilidad, rendimiento y optimización de peticiones mediante caché.',
      company: 'Acid Tango',
      tags: ['Next.js', 'TypeScript', 'React', 'Accesibilidad'],
    },
  ],
  en: [
    {
      title: 'Zara iOS',
      description:
        'New feature development and checkout flow improvements for the Zara iOS application. Implementation of Swift Package Modules (SPM) to isolate business logic and improve the maintainability of the project.',
      company: 'Acid Tango — Inditex',
      tags: ['Swift', 'SwiftUI', 'UIKit', 'SPM', 'TDD', 'Accessibility'],
    },
    {
      title: 'Samsung Unfear',
      description:
        'Android application for people with Autism Spectrum Disorder (ASD) that manages the noise cancellation of Galaxy Buds headphones when encountering loud or unexpected sounds.',
      company: 'Acid Tango — Samsung',
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    },
    {
      title: 'Web backoffices',
      description:
        'Development of backoffice tools for internal client management. Focus on accessibility, performance and request optimisation through caching.',
      company: 'Acid Tango',
      tags: ['Next.js', 'TypeScript', 'React', 'Accessibility'],
    },
  ],
};

const personalProjects: Record<Lang, Project[]> = {
  es: [
    {
      title: 'adriangg.dev',
      description:
        'Portfolio personal desarrollado con Astro, Tailwind CSS 4 y desplegado en Cloudflare Workers. Optimizado para rendimiento, SEO y con soporte para dos idiomas (ES/EN).',
      url: 'https://github.com/Adriangar99/adriangg',
      tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'i18n'],
    },
    {
      title: 'localizations-manager',
      description:
        'Herramienta de gestión de localizaciones para proyectos iOS desarrollada en Swift.',
      url: 'https://github.com/Adriangar99/localizations-manager',
      tags: ['Swift', 'iOS', 'Localización'],
    },
  ],
  en: [
    {
      title: 'adriangg.dev',
      description:
        'Personal portfolio built with Astro, Tailwind CSS 4 and deployed on Cloudflare Workers. Optimised for performance, SEO and with bilingual support (ES/EN).',
      url: 'https://github.com/Adriangar99/adriangg',
      tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'i18n'],
    },
    {
      title: 'localizations-manager',
      description: 'Localisation management tool for iOS projects built in Swift.',
      url: 'https://github.com/Adriangar99/localizations-manager',
      tags: ['Swift', 'iOS', 'Localisation'],
    },
  ],
};

export function getClientProjects(lang: Lang): Project[] {
  return clientProjects[lang];
}

export function getPersonalProjects(lang: Lang): Project[] {
  return personalProjects[lang];
}
