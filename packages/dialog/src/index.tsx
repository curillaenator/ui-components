import React, { forwardRef, ReactNode } from 'react';

// import styles from './styles.module.scss';

interface DialogProps {
  openNode: ReactNode;
  children?: ReactNode;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  const { openNode, children } = props;

  return (
    <>
      {openNode}

      <dialog ref={ref}>{children}</dialog>
    </>
  );
});
