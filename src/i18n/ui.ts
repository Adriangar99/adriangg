export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.toggle': 'Abrir menú de navegación',

    // Home
    'home.greeting': 'Hola, soy',
    'home.title': 'Juan Adrián García García',
    'home.subtitle': 'Software Developer',
    'home.description':
      'Cuento con más de 5 años de experiencia en frontend, backend y desarrollo móvil. He contribuido a proyectos como la app iOS de Zara y Samsung Unfear.',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Contactar',
    'home.highlights.focus.label': 'Especialidad',
    'home.highlights.focus.value': 'Desarrollo web y móvil (iOS & Android)',
    'home.highlights.stack.label': 'Stack principal',
    'home.highlights.stack.value': 'TypeScript, React, Next.js, Swift, Kotlin',
    'home.highlights.location.label': 'Ubicación',
    'home.highlights.location.value': 'Tenerife, España',

    // About
    'about.title': 'Sobre mí',
    'about.bio.p1':
      'Desarrollador de software con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles. Actualmente trabajo en Acid Tango, donde he contribuido a proyectos de alto impacto como la aplicación iOS de Zara (Inditex) y Samsung Unfear para Android, aplicando metodologías como TDD y DDD.',
    'about.bio.p2':
      'Poseo experiencia sólida en el stack frontend con React y Next.js, en el backend con NestJS y Node.js, y en el desarrollo móvil nativo tanto para iOS (Swift, SwiftUI, UIKit) como para Android (Kotlin, Jetpack Compose). Me especializo en crear código legible, mantenible y de calidad.',
    'about.bio.p3':
      'Me apasiona el desarrollo de software de calidad y el aprendizaje continuo. Me interesa especialmente la arquitectura de software, la accesibilidad y las soluciones que escalan bien a lo largo del tiempo.',
    'about.skills.title': 'Habilidades',
    'about.experience.title': 'Experiencia',
    'about.education.title': 'Formación',
    'about.experience.present': 'Presente',
    'about.languages.title': 'Idiomas',
    'about.languages.es': 'Español — Nativo',
    'about.languages.en': 'Inglés — Nivel medio-alto',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle':
      'Una selección de proyectos personales y profesionales. Código abierto, experimentos y trabajos destacados.',
    'projects.empty': 'Próximamente.',
    'projects.view': 'Ver proyecto',
    'projects.professional': 'Proyectos profesionales',
    'projects.personal': 'Proyectos personales',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle':
      '¿Tienes un proyecto en mente, una pregunta o simplemente quieres ponerte en contacto? No dudes en escribir.',
    'contact.links.title': 'Puedes encontrarme aquí',
    'contact.response': 'Respondo habitualmente en 24–48 horas.',
    'contact.email': 'adriangargar99@gmail.com',

    // Footer
    'footer.built': 'Desarrollado con',
    'footer.rights': 'Juan Adrián García García.',

    // 404
    '404.title': 'Página no encontrada',
    '404.description': 'La página que buscas no existe o ha sido movida.',
    '404.back': 'Volver al inicio',

    // SEO
    'seo.siteName': 'Juan Adrián García García — adriangg.dev',
    'seo.home.title': 'Inicio',
    'seo.home.description':
      'Juan Adrián García García — Desarrollador de software especializado en web y móvil con TypeScript, React, Next.js, Swift y Kotlin.',
    'seo.about.title': 'Sobre mí',
    'seo.about.description':
      'Conoce más sobre Juan Adrián García García: experiencia profesional en Acid Tango e Itop Consulting, formación técnica y habilidades en desarrollo web y móvil.',
    'seo.projects.title': 'Proyectos',
    'seo.projects.description':
      'Proyectos personales y profesionales de Juan Adrián García García. Desarrollo web, herramientas y experiencias de usuario.',
    'seo.contact.title': 'Contacto',
    'seo.contact.description':
      'Contacta con Juan Adrián García García por GitHub, LinkedIn o email.',
    'seo.404.title': 'Página no encontrada',
    'seo.404.description': 'La página que buscas no existe.',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.toggle': 'Toggle navigation menu',

    // Home
    'home.greeting': "Hi, I'm",
    'home.title': 'Juan Adrián García García',
    'home.subtitle': 'Software Developer',
    'home.description':
      'Over 5 years of experience in frontend, backend and mobile development. I have contributed to projects such as the Zara iOS app and Samsung Unfear.',
    'home.cta.projects': 'View projects',
    'home.cta.contact': 'Get in touch',
    'home.highlights.focus.label': 'Focus',
    'home.highlights.focus.value': 'Web & mobile development (iOS & Android)',
    'home.highlights.stack.label': 'Main stack',
    'home.highlights.stack.value': 'TypeScript, React, Next.js, Swift, Kotlin',
    'home.highlights.location.label': 'Location',
    'home.highlights.location.value': 'Tenerife, Spain',

    // About
    'about.title': 'About me',
    'about.bio.p1':
      'Software developer with over 5 years of experience building web and mobile applications. Currently working at Acid Tango, where I have contributed to high-impact projects such as the Zara (Inditex) iOS application and Samsung Unfear for Android, applying methodologies like TDD and DDD.',
    'about.bio.p2':
      'Solid experience with the frontend stack using React and Next.js, backend with NestJS and Node.js, and native mobile development for both iOS (Swift, SwiftUI, UIKit) and Android (Kotlin, Jetpack Compose). I specialise in writing readable, maintainable, and high-quality code.',
    'about.bio.p3':
      'Passionate about quality software development and continuous learning. Particularly interested in software architecture, accessibility, and solutions that scale well over time.',
    'about.skills.title': 'Skills',
    'about.experience.title': 'Experience',
    'about.education.title': 'Education',
    'about.experience.present': 'Present',
    'about.languages.title': 'Languages',
    'about.languages.es': 'Spanish — Native',
    'about.languages.en': 'English — Upper intermediate',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle':
      'A selection of personal and professional projects. Open source, experiments and work I am proud of.',
    'projects.empty': 'Coming soon.',
    'projects.view': 'View project',
    'projects.professional': 'Professional projects',
    'projects.personal': 'Personal projects',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle':
      'Have a project in mind, a question, or just want to say hello? Feel free to reach out.',
    'contact.links.title': 'Find me here',
    'contact.response': 'I typically respond within 24–48 hours.',
    'contact.email': 'adriangargar99@gmail.com',

    // Footer
    'footer.built': 'Built with',
    'footer.rights': 'Juan Adrián García García.',

    // 404
    '404.title': 'Page not found',
    '404.description': "The page you're looking for doesn't exist or has been moved.",
    '404.back': 'Go back home',

    // SEO
    'seo.siteName': 'Juan Adrián García García — adriangg.dev',
    'seo.home.title': 'Home',
    'seo.home.description':
      'Juan Adrián García García — Software developer specialised in web and mobile with TypeScript, React, Next.js, Swift and Kotlin.',
    'seo.about.title': 'About',
    'seo.about.description':
      'Learn more about Juan Adrián García García: professional experience at Acid Tango and Itop Consulting, technical background, and web & mobile development skills.',
    'seo.projects.title': 'Projects',
    'seo.projects.description':
      'Personal and professional projects by Juan Adrián García García. Web development, tooling, and user experiences.',
    'seo.contact.title': 'Contact',
    'seo.contact.description':
      'Contact Juan Adrián García García via GitHub, LinkedIn or email.',
    'seo.404.title': 'Page not found',
    'seo.404.description': "The page you're looking for doesn't exist.",
  },
} as const;
