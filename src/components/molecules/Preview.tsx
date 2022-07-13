import { MarkdownRender } from '@atoms';

import { useRootSelector } from '@hooks';

const Preview = ({}: PreviewProps) => {
  const content = useRootSelector(state => state.document.content);

  return (
    <div className="min-w-[25%] flex-1">
      <div className="bg-raisin-black px-4 py-2">
        <p className="font-bold uppercase tracking-widest text-gray-50">
          Preview
        </p>
      </div>
      <div className="w-full p-2">
        <MarkdownRender children={content} />
      </div>
    </div>
  );
};

type PreviewProps = {};

export default Preview;
