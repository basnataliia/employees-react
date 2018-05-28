import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from './styles.scss'

const ReviewItem = props => {
  const initial = props.item.reviewerName
            .split(' ')
            .map(_ => _.charAt(0).toUpperCase())
            .join('')
  return (
    <Card className={styles.card}>
       <CardHeader
         avatar={
           <Avatar aria-label="Recipe" className={styles.avatar}>
             {initial}
           </Avatar>
         }
         title={props.item.reviewerName}
         subheader={props.item.date}
       />
       <CardContent>
         <Typography component="p">
           {props.item.review}
         </Typography>
       </CardContent>
     </Card>
  )
}

export default ReviewItem
