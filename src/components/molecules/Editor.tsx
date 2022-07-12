import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Resizable } from 're-resizable';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { useDebounce } from 'react-use';

import { useRootDispatch, useRootSelector } from '@hooks';
import { setDocumentContent } from '@store/slices/root.slice';

const Editor = ({}: EditorProps) => {
  const dispatch = useRootDispatch();
  const content = useRootSelector(state => state.document.content);

  const titleRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState('');
  const [editorHeight, setEditorHeight] = useState('100%');

  useDebounce(
    () => {
      dispatch(setDocumentContent(value));
    },
    500,
    [value]
  );

  useLayoutEffect(() => {
    const title = titleRef.current;
    if (title) {
      const titleHeight = title.getBoundingClientRect().height;
      setEditorHeight(`calc(100% - ${titleHeight}px)`);
    }
  }, []);

  useEffect(() => {
    setValue(content);
  }, []);

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Resizable
      defaultSize={{
        width: '50%',
        height: '100%'
      }}
      maxWidth={'75%'}
      minWidth={'25%'}
      className="h-full"
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }}
      handleComponent={{
        right: <div className="h-full w-1 bg-jet"></div>
      }}
    >
      <div ref={titleRef} className="bg-raisin-black px-4 py-2">
        <p className="font-bold uppercase tracking-widest text-gray-50">
          Markdown
        </p>
      </div>

      <div className="mr-1 h-full">
        <CodeMirror
          className="h-full max-h-screen overflow-hidden bg-eerie-black"
          width="100%"
          height={editorHeight}
          maxHeight={editorHeight}
          theme={'dark'}
          value={value}
          onChange={handleChange}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages })
          ]}
        />
      </div>
    </Resizable>
  );
};

type EditorProps = {};

export default Editor;
