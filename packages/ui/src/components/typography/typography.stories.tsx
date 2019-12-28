import React, { Fragment } from 'react';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import BodyText from './BodyText';
import SpanText from './SpanText';

export default { title: 'ui/Typography' };

export const withDefaultTypography = () => {
  return (
    <Fragment>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <BodyText>Body Text</BodyText>
      <div>
        <SpanText color="highlight1">Span Text</SpanText>
      </div>
    </Fragment>
  );
};
