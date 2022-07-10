import { useEffect, useState } from 'react';
import {
  ResizePanel,
  ResizeContent,
  ResizeHandleRight
} from 'react-hook-resize-panel';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

import { useRootDispatch, useRootSelector } from '@hooks';

import { setDocumentContent } from '@store/slices/root.slice';
import { useDebounce } from 'react-use';

const Editor = ({ headerRef }: EditorProps) => {
  const dispatch = useRootDispatch();
  const content = useRootSelector(state => state.document.content);

  const [initialWidth, setInitialWidth] = useState(500);
  const [minWidth, setMinWidth] = useState(200);
  const [maxWidth, setMaxWidth] = useState(500);
  const [maxHeight, setMaxHeight] = useState('100%');

  const [value, setValue] = useState('Hello, World');

  useDebounce(
    () => {
      dispatch(setDocumentContent(value));
    },
    500,
    [value]
  );

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

  useEffect(() => {
    setValue(content);
  }, []);

  const handleChange = (value: string) => {
    setValue(value);
  };

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
          value={content}
          onChange={handleChange}
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
