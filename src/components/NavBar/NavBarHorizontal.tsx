import { NavBar } from '.';
import { Link } from '../Link';
import { Image } from '../Image';
import React, { FunctionComponent, memo } from 'react';
import GivhrLogo from '../../assets/images/givhr_text_logo.png';

const NavBarHorizontal: FunctionComponent = () => (
  <NavBar>
    <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
    <Link to="/">Dashboard</Link>
    <Link to="/coming-soon">Templates (Coming Soon)</Link>
  </NavBar>
);

export default memo(NavBarHorizontal);
