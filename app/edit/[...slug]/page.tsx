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
    const slug = (await params).slug
    
    // Read markdown file from the file system
    const filePath = path.join(process.cwd(), 'pages', `${slug.join('/')}`)
    const markdown = await fs.readFile(filePath, 'utf8')

    return <div>
      My Post: {slug}
      <div style={{border: '1px solid black'}}>
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
    </div>
  }