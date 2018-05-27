import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styles from './styles.scss'

//TODO: change to function instead of class


class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={styles.dialog}
          >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

export default Modal;
