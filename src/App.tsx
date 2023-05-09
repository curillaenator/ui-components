import React from 'react';

import { Dialog, useDialog, Scroll } from './components';

const DIALOG_ID = 'dialog-tag-testing'; // пока не задействован

export const App = () => {
  const { ref: modalRef, open, openDialog, closeDialog } = useDialog();

  const lorem =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus est excepturi quas illo eaque optio, nam, ea officiis porro iusto doloremque dolores? Laudantium animi blanditiis numquam cum harum minima quas quae facere nemo consequuntur quia, repudiandae accusamus fuga.';

  return (
    <div style={{ width: '100vw', minHeight: '100vh', padding: '64px' }}>
      <h1 style={{ marginBottom: 32 }}>Hello! Click open, pls</h1>

      <button
        type='button'
        onClick={openDialog}
        style={{
          marginBottom: '32px',

          height: '48px',
          padding: '0 16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-neutral-100)',

          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '600',
        }}
      >
        Open
      </button>

      <p>{lorem.repeat(40)}</p>

      <Dialog id={DIALOG_ID} ref={modalRef} open={open}>
        <Scroll
          style={{
            paddingRight: '16px',
            maxHeight: 'calc(100vh - 128px - 64px)',
            maxWidth: 'calc(100vh - 128px - 64px)',
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          <h2 style={{ marginBottom: 32 }}>Dialog</h2>
          <p style={{ marginBottom: 32 }}>{lorem.repeat(40)}</p>
          <button
            onClick={closeDialog}
            style={{
              height: '48px',
              padding: '0 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-neutral-100)',

              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '600',
            }}
          >
            Close
          </button>
        </Scroll>
      </Dialog>
    </div>
  );
};
