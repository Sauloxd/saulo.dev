import React, { Fragment } from 'react';
import IconEmail from './IconEmail';
import IconSxd from './IconSxd';
import IconTimes from './IconTimes';
import IconLinkedin from './IconLinkedin';
import IconGithub from './IconGithub';

export default { title: 'ui/Icons' };

export const withDefaultNavbar = () => {
  return (
    <Fragment>
      <IconEmail/>
      <IconGithub/>
      <IconSxd/>
      <IconTimes />
      <IconLinkedin/>
    </Fragment>
  );
};
