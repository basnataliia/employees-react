import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import styles from './styles.scss'

const ReviewsList = props => {
  if(!props.reviews.length) {
    return (
      <div className={styles.noReviews}>There are no reviews yet. Be the first one to review.</div>
    )
  }
  return (
    props.reviews.map(item =>
      <ReviewItem key={item.id} item={item}/>
    )
  )
}

export default ReviewsList
