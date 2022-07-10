import { useEffect, useState } from 'react';
import {
  ResizePanel,
  ResizeContent,
  ResizeHandleRight
} from 'react-hook-resize-panel';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const Editor = ({ headerRef }: EditorProps) => {
  const [initialWidth, setInitialWidth] = useState(500);
  const [minWidth, setMinWidth] = useState(200);
  const [maxWidth, setMaxWidth] = useState(500);
  const [maxHeight, setMaxHeight] = useState('100%');

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const headerWidth = header.getBoundingClientRect().width;
      const headerHeight = header.getBoundingClientRect().height;

      setInitialWidth(headerWidth / 2);
      setMinWidth(headerWidth * 0.25);
      setMaxWidth(headerWidth - headerWidth * 0.25);
      setMaxHeight(`calc(100vh - ${headerHeight}px)`);
    }
  }, [headerRef]);

  return headerRef.current ? (
    <ResizePanel
      initialWidth={initialWidth}
      minWidth={minWidth}
      maxWidth={maxWidth}
    >
      <ResizeContent>
        <CodeMirror
          className="h-full max-h-screen bg-eerie-black"
          theme={'dark'}
          height={maxHeight}
          value="# Hello World"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages })
          ]}
        />
      </ResizeContent>
      <ResizeHandleRight className="w-0.5 cursor-col-resize bg-jet"></ResizeHandleRight>
    </ResizePanel>
  ) : null;
};

type EditorProps = {
  headerRef: React.RefObject<HTMLElement>;
};

export default Editor;
