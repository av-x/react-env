import React from 'react';

import { IconPower } from './svgs';

type Props = {
  name: string;
  className?: string;
};

export const Icon: React.FC<Props> = ({ name, ...rest }: Props) => {
  switch (name) {
    case 'power':
      return <IconPower {...rest} />;
    default:
      return null;
  }
};
