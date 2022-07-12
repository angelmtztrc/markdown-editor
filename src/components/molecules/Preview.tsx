import { Resizable } from 're-resizable';

const Preview = ({}: PreviewProps) => {
  return (
    <div className="min-w-[25%] flex-1">
      <div className="bg-raisin-black px-4 py-2">
        <p className="font-bold uppercase tracking-widest text-gray-50">
          Preview
        </p>
      </div>
      <h1 className="text-white">Hello, World!</h1>
    </div>
  );
};

type PreviewProps = {};

export default Preview;
