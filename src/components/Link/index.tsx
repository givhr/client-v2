import React from 'react';

import styled from '../../theme/styledComponent';
import { Link as ReachLink } from '@reach/router';

export const Link = styled(ReachLink)`
  font-size: 20px;
  line-height: 32px;
  text-decoration: none;
  color: ${({ theme }) => theme.primary6};
  margin: 40px;
  &:active {
    color: white;
  }
  &[aria-current] {
    color: ${({ theme }) => theme.primary13};
    font-weight: bold;
  }
`;
