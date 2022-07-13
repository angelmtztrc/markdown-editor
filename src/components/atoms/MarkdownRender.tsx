import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import cls from 'classnames';

const MarkdownRender = ({ className, ...rest }: MarkdownRenderProps) => {
  return (
    <ReactMarkdown
      {...rest}
      className={cls(
        className,
        'prose prose-invert w-full max-w-full prose-pre:bg-transparent prose-pre:!p-0 lg:prose-xl'
      )}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={dracula as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
    />
  );
};

type MarkdownRenderProps = {
  className?: string;
  children: string;
};

export default MarkdownRender;
