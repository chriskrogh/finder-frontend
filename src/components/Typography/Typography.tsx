import React from 'react';
import { ThemeTypography } from 'theme/typography';

import type { TextAlignOption, TextTransformOption } from './Tag';
import Tag from './Tag';

export type Props = {
  tag: keyof ThemeTypography;
  italic?: boolean;
  textTransform?: TextTransformOption;
  textAlign?: TextAlignOption;
};

const Typography: React.FC<Props> = ({ tag, italic, children, ...props }) => {
  const Wrapper = italic ? 'i' : 'span';

  return (
    <Wrapper>
      <Tag {...props} tag={tag} as={tag}>
        {children}
      </Tag>
    </Wrapper>
  );
};

export default Typography;
