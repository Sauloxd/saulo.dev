import React, { useEffect, useRef } from 'react';
import H2 from '@saulo.dev/ui/src/components/typography/H2';
import H3 from '@saulo.dev/ui/src/components/typography/H3';
import H4 from '@saulo.dev/ui/src/components/typography/H4';
import A from '@saulo.dev/ui/src/components/typography/A';
import Ul from '@saulo.dev/ui/src/components/lists/Ul';
import Li from '@saulo.dev/ui/src/components/lists/Li';
import Ol from '@saulo.dev/ui/src/components/lists/Ol';
import SpanText from '@saulo.dev/ui/src/components/typography/SpanText';

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SpanText color="neutral" size="px16">
    {children}
  </SpanText>
);
const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SpanText color="highlight2" size="px16">
    {children}
  </SpanText>
);
const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SpanText color="primaryAccessory" fontWeight="bold">
    {children}
  </SpanText>
);
const Italic: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <em>
    <SpanText color="highlight1">{children}</SpanText>
  </em>
);
const Img: React.FC<{ children: React.ReactNode, style: any }> = ({ style, ...propsWithoutStyle }) => {
  const ref = useRef<HTMLImageElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.cssText = style;
    }
  }, [ref.current]);

  return <img ref={ref} {...propsWithoutStyle} />;
};
const elementComponentMap = {
  a: A,
  h1: H2,
  h2: H3,
  h3: H4,
  p: P,
  ul: Ul,
  li: Li,
  ol: Ol,
  span: SpanText,
  img: Img,
  code: Code,
  strong: Strong,
  em: Italic,
  blockquote: Strong,
  del: (props: any) => <del {...props} />,
  pre: (props: any) => <pre {...props} />,
};

export default elementComponentMap;
