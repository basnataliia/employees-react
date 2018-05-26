import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.scss'

const Loader = (props) => {
  return (
    <div className={styles.loader}>
      <CircularProgress size={250} thickness={1} />
      <p>Please wait while loading</p>
   </div>
  );
}

export default Loader;
