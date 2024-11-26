import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { EditorProps } from '../../../components/EditorComponent'
import { promises as fs } from 'fs'
import path from 'path'

const EditorComp = dynamic<EditorProps>(() => import('../../../components/EditorComponent'), { ssr: false })

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {

    let markdown = ''
    try {
      const slug = (await params).slug
    
      // Read markdown file from the file system
      const filePath = path.join(process.cwd(), 'pages', `${slug.join('/')}`)
  
       markdown = await fs.readFile(filePath, 'utf8')
    } catch (error) {
      console.error('Error reading file:', error)
    }

    return (
      <div>
        <div style={{border: '1px solid black'}}>
          <Suspense fallback={<div>Loading editor...</div>}>
            <EditorComp markdown={markdown} />
          </Suspense>
        </div>
      </div>
    )
  }