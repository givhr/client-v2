import { NavBar } from '.';
import { Button } from '../Button';
import React, { FunctionComponent, memo } from 'react';

const NavBarVertical: FunctionComponent = () => (
  <NavBar vert>
    <Button primary height={'44px'} width={'150px'} m={'40px'}>
      New Giveaway
    </Button>
  </NavBar>
);

export default memo(NavBarVertical);
