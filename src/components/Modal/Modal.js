import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styles from './styles.scss'

const Modal = props =>
  (
    <Dialog
      fullScreen={props.fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
      className={styles.dialog}
      >
      {props.children}
    </Dialog>
  )

export default Modal
