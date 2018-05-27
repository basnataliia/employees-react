import React from 'react';
import ListItem from 'components/ListItem/ListItem'
import styles from './styles.scss'

const List = props =>
  (
    <div className={styles.root}>
       {props.items.map(item =>
         <ListItem item={item} />
       )}
    </div>
  )

export default List
