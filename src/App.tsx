import { Editor, Header, Preview } from '@molecules';
import { useEffect, useRef } from 'react';

const App = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Header ref={headerRef} />
      <div className="flex flex-1 flex-row flex-nowrap bg-eerie-black">
        <Editor headerRef={headerRef} />
        <Preview />
      </div>
    </div>
  );
};

export default App;
