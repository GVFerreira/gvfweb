import { defineRouting } from 'next-intl/routing'
 
export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'en',
  pathnames: {
    '/': "/",
    '/#contact': "/#contact",
    '#contact': "#contact",
    '/#projects': '/#projects',
    '#projects': '#projects',
    '/#technologies': '/#technologies',
    '#technologies': '#technologies',
    '/#process': '/#process',
    '#process': '#process',
    '/#feedbacks': '/#feedbacks',
    '#feedbacks': '#feedbacks',
    '/#faq': '/#faq',
    '#faq': '#faq',
    '/projects': {
      en: '/projects',
      pt: '/projetos'
    },
    '/project/[projectSlug]': {
      en: '/project/[projectSlug]',
      pt: '/projeto/[projectSlug]'
    },
    '/services': {
      en: '/services',
      pt: '/servicos'
    },
    '/blog': '/blog',
    '/blog/[postSlug]': {
      en: '/blog/[postSlug]',
      pt: '/blog/[postSlug]'
    },
    '/contact': {
      en: '/contact',
      pt: '/contato'
    },
    '/privacy': {
      en: '/privacy',
      pt: '/privacidade'
    },
    '/cookies': '/cookies'
  }
})