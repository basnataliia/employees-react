import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles.scss'

const ListItem = props =>
      (
         <Card className={styles.card}>
           <CardMedia
             className={styles.media}
             image={props.employee.profilePic}
             title={props.employee.fullName}
           />
           <CardContent>
             <Typography gutterBottom variant="headline" component="h2">
               {props.employee.fullName}
             </Typography>
             <Typography component="p">
               Job title: {props.employee.position}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" color="primary">
               Learn more
             </Button>
             <Button size="small" color="primary">
               Edit
             </Button>
             <Button size="small" color="primary">
               Delete
             </Button>
           </CardActions>
         </Card>
      )


export default ListItem
