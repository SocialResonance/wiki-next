import { useConfig } from 'nextra-theme-docs'

export default function ArticleLayout({ children }) {
  const { 
    title = '', 
    link = '', 
    source = '' 
  } = useConfig().normalizePagesResult.activeMetadata ?? {}

  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {link ? (
            <a 
              href={link} 
              target="_blank"
              rel="noopener noreferrer" 
              title={`Click to visit the ${title} website`}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h1>
        <div className="max-w-2xl text-left md:text-2xl my-4">
          {children}
          {source && (
            <p className="mt-4 text-right">
              Source:{' '}
              <a 
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to visit the website of this source"
              >
                {source}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
} 