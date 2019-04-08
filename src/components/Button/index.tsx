import styled from '../../theme/styledComponent';

interface IButton {
  m?: string;
  width: string;
  height: string;
  primary: boolean;
  onClick?: () => void;
}

export const Button = styled.button<IButton>`
  color: ${({ theme, primary }) => (primary ? theme.primary13 : theme.primary1)};
  background: ${({ theme, primary }) => (primary ? theme.primary1 : theme.primary13)};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  margin-top: ${({ m }) => m};
  border: 1px solid ${({ theme }) => theme.primary1};
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${({ theme, primary }) => (primary ? theme.primary1 : theme.primary13)};
    background: ${({ theme, primary }) => (primary ? theme.primary13 : theme.primary1)};
    transition: background 0.1s, transform 0.1s;
  }
`;
