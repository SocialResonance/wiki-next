import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Resonance Wiki</span>,
  toc: {
    title: 'On this page!!!',
  },
  docsRepositoryBase: 'https://github.com/SocialResonance/wiki-next',
  darkMode: true,

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
    component: ({ filePath }) => {
      const href = `https://github.com/your-repo/edit/main/${filePath}`
      return <a href={href}>Edit this page!!!</a>
    }
  }
}

export default config
