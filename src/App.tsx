import React from 'react';

import { Dialog, useDialog } from './components/dialog';

const DIALOG_ID = 'dialog-tag-testing';

export const App = () => {
  const { ref: modalRef, open, openDialog, closeDialog } = useDialog();

  const lorem =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi minus est excepturi quas illo eaque optio, nam, ea officiis porro iusto doloremque dolores? Laudantium animi blanditiis numquam cum harum minima quas quae facere nemo consequuntur quia, repudiandae accusamus fuga.';

  return (
    <>
      <div style={{ width: '100vw', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: 32 }}>Hello</h1>

        <button type='button' onClick={openDialog} style={{ marginBottom: 32 }}>
          Open
        </button>

        <p>{lorem.repeat(40)}</p>
      </div>

      <Dialog id={DIALOG_ID} ref={modalRef} open={open}>
        <h2 style={{ marginBottom: 32 }}>Dialog</h2>
        <p style={{ marginBottom: 32 }}>sikdihiosdhy soduvd sudvio viosduv iud9isov</p>
        <button onClick={closeDialog}>Close</button>
      </Dialog>
    </>
  );
};
