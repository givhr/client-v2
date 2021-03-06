import styled from '../../theme/styledComponent';

export const NavBar = styled.nav<{ vert?: boolean }>`
  display: flex;
  position: absolute;
  align-items: center;
  top: ${({ vert }) => vert && '80px'};
  left: ${({ vert }) => vert && 0};
  width: ${({ vert }) => (vert ? '208px' : '100%')};
  height: ${({ vert }) => (vert ? `calc(${'100vh - 80px'})` : '80px')};
  flex-direction: ${({ vert }) => vert && 'column'};
  justify-content: ${({ vert }) => vert && 'space-between'};
  background-color: ${({ vert, theme }) => (vert ? theme.primary13 : theme.primary1)};
  box-shadow: ${({ vert, theme }) => (vert ? theme.boxShadowVertNav : theme.boxShadowHorzNav)};
`;
