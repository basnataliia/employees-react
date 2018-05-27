import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import EmployeeModal from 'containers/employees/modals/EmployeeModal'
import {withModal} from 'components/withModal/withModal'
import styles from './styles.scss'

const ListItem = props =>
      (
         <Card className={styles.card}>
           <CardMedia
             className={styles.media}
             image={props.item.profilePic}
             title={props.item.fullName}
           />
           <CardContent>
             <Typography gutterBottom variant="headline" component="h2">
               {props.item.fullName}
             </Typography>
             <Typography component="p">
               Job title: {props.item.position}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" color="primary">
               Learn more
             </Button>
             <Button size="small" color="primary" onClick={props.openModal}>
               Edit
             </Button>
             <Button size="small" color="primary"
               onClick={() => props.handleDeleteEmployee(props.item.id)}>
               Delete
             </Button>
           </CardActions>
         </Card>
      )
const isNew = false;
const WrappedComponent = withModal(ListItem, EmployeeModal, isNew);

export default WrappedComponent
