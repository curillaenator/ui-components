import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './scroll.module.scss';

export const Scroll: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={cn(styles.container, className)}>
      {children}
    </div>
  );
};
