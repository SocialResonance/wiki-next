import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import process from 'process';

const config: DocsThemeConfig = {
  logo: <span>Resonance Wiki</span>,
  toc: {
    title: 'On this page!!!',
  },
  docsRepositoryBase: 'https://github.com/SocialResonance/wiki-next',

  project: {
    link: 'https://github.com/SocialResonance/wiki-next',
  },
  footer: {
    content: 'Resonance Wiki',
  },
  feedback: {
    content: 'Ideas?',
    useLink: () => 'https://pol.is'
  },
  editLink: {
    content: 'Edit this page',
    component: ({filePath}) => {
      if (!filePath) return <span>Edit not available</span>
      const slug = filePath.replace('pages/', '')
      const href = `${process.env.WEBSITE_URL}/edit/${slug}`
      return <a data-cy={`edit-link-${slug}`} href={href}>Edit this page</a>
    }
  },
}
export default config
