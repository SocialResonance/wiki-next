import process from 'process';

export default {
  logo: <span>Resonance Wiki</span>,
  project: {
    link: 'https://github.com/SocialResonance/wiki-next'
  },
  docsRepositoryBase: 'https://github.com/SocialResonance/wiki-next/tree/main',
  footer: {
    text: 'Mind Foundation'
  },
  feedback: {
    content: 'Ideas?',
    useLink: () => 'https://pol.is'
  },
  editLink: {
    content: 'Edit this page',
    component: ({ filePath }) => {
        const editSlug = filePath.replace('pages/', 'edit/');

      const href = `${process.env.WEBSITE_URL}/${editSlug}`
      return <a href={href}>Edit this page</a>
    }
  }
} 
