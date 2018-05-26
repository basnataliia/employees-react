import React from 'react';
import ListItem from 'components/ListItem/ListItem'
import styles from './styles.scss'

const List = props =>
  (
    <div className={styles.root}>
       {props.employees.map(employee => (
         <ListItem employee={employee} />
      ))}
    </div>
  )

export default List
