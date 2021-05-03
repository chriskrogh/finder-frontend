import styled from 'styled-components';
import { ThemeTypography } from 'theme/typography';

export type TextTransformOption = 'capitalize' | 'lowercase' | 'uppercase';
export type TextAlignOption = 'left' | 'right' | 'center' | 'justify';

type Props = {
  tag: keyof ThemeTypography;
  color?: string;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Tag = styled.span<Props>`
  font-family: ${({ theme, tag }) => theme.typography[tag].fontFamily};
  font-size: ${({ theme, tag }) => theme.typography[tag].fontSize}px;
  font-weight: ${({ theme, tag }) => theme.typography[tag].fontWeight};
  line-height: ${({ theme, tag }) => theme.typography[tag].lineHeight}px;
  letter-spacing: ${({ theme, tag }) => theme.typography[tag].letterSpacing}px;
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  margin: 0;
`;

export default Tag;
