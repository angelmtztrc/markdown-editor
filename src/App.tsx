import { useRef } from 'react';

import { Editor, Header, Preview } from '@molecules';

const App = () => {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Header />
      <div className="flex w-full flex-1 overflow-hidden bg-eerie-black">
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

export default App;
