import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import withUiConfig from '../src/services/withUiConfig'
import { Grid, CenterSingleColumn } from '../src/components/layout/Grid'

const UiDecorated = withUiConfig(Fragment);

const UiDecorator = (storyFn) => <UiDecorated>{storyFn()}</UiDecorated>

addDecorator(UiDecorator)

const GridDecorator = (storyFn) => (
  <Grid>
    <CenterSingleColumn>
      {storyFn()}
    </CenterSingleColumn>
  </Grid>
)

addDecorator(GridDecorator)