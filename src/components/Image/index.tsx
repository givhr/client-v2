import styled from '../../theme/styledComponent';

interface IImage {
  height: string;
  width?: string;
  p?: string;
  m?: string;
}

export const Image = styled.img<IImage>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding-left: ${({ p }) => p && p};
  margin-right: ${({ m }) => m && m};
`;
