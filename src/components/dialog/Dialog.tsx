import React, { forwardRef, ReactNode } from 'react';
import cn from 'classnames';

import styles from './dialog.module.scss';

interface DialogProps {
  id: string;
  open?: boolean;
  children?: ReactNode;
}

const DialogComponent = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  const { id, open, children } = props;

  return (
    <dialog
      id={id}
      ref={ref}
      className={cn(styles.dialog, {
        [styles.dialog_open]: open,
        [styles.dialog_closed]: !open,
      })}
    >
      {children}
    </dialog>
  );
});

DialogComponent.displayName = 'Dialog';

export const Dialog = DialogComponent;
