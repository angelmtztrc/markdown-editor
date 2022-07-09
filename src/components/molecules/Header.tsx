import { forwardRef } from 'react';
import { MenuIcon, DocumentIcon, TrashIcon } from '@heroicons/react/outline';

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => (
  <header ref={ref} className="flex bg-jet pr-4">
    <div className="bg-onyx p-4">
      <MenuIcon className="h-8 w-8 text-gray-50" />
    </div>
    <div className="flex flex-1 items-center justify-between">
      <div className="flex items-center">
        <h1 className="px-4 text-lg font-bold uppercase tracking-widest text-gray-50">
          Markdown
        </h1>
        <div className="flex items-center border-l-2 border-onyx">
          <div className="px-4">
            <DocumentIcon className="h-5 w-5 text-gray-50" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm capitalize text-gray-400">Document Name</p>
            <p className="text-sm text-gray-50">welcome.md</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <TrashIcon className="h-5 w-5 text-gray-400" />
        <button className="rounded bg-burnt-sienna px-4 py-2 text-sm font-bold uppercase text-white">
          Save Changes
        </button>
      </div>
    </div>
  </header>
));

interface HeaderProps extends React.ComponentPropsWithRef<'header'> {}

export default Header;
