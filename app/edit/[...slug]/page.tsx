import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { EditorProps } from '../../../components/EditorComponent'


const EditorComp = dynamic<EditorProps>(() => import('../../../components/EditorComponent'), { ssr: false })

const markdown = `
Hello **world**!
`

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    return <div>
      My Post: {slug}
      <div style={{border: '1px solid black'}}>
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
      
      </div>
  }