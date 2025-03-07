
"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin,toolbarPlugin, BoldItalicUnderlineToggles,linkPlugin, UndoRedo } from "@mdxeditor/editor";
import { FC } from "react";
import '@mdxeditor/editor/style.css'

export interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {

    console.log(markdown)
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      plugins={[headingsPlugin(), linkPlugin(), toolbarPlugin({
        toolbarClassName: 'my-classname',
        toolbarContents: () => (
          <>
            {' '}
            <UndoRedo />
            <BoldItalicUnderlineToggles />
          </>
        )
      })
]}
    />
  );
};

export default Editor;
