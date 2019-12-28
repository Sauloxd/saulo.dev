import React, { Fragment } from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import Navbar from '@webshine/ui/src/components/navbar/Navbar';
import Tab from '@webshine/ui/src/components/tabs/Tab';
import H1 from '@webshine/ui/src/components/typography/H1';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';

const RootPage: React.FC = () => {
  return (
    <Fragment>
      <Navbar>
        <Tab active={true} title={'Home.md'}/>
        <Tab active={false} title={'Blog.md'}/>
      </Navbar>
      <Grid>
        <CenterSingleColumn>
          <H1>
            A Place to reflect
          </H1>
        </CenterSingleColumn>
      </Grid>
    </Fragment>
  );
};

export default withUiConfig(RootPage);
