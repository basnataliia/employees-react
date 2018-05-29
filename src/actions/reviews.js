import * as types from './actionTypes';
import ReviewsApi from 'mocks/mockReviewsApi';

const getReviewsSuccess = (items) => {
  return ({
    type: types.GET_REVIEWS_SUCCESS,
    items
  })
}

export const getReviews = () => (dispatch) =>
   ReviewsApi.getAllReviews()
          .then(reviews => {
            dispatch(getReviewsSuccess(reviews))
          })
          .catch(error => {
            throw(error)
          })

const saveReviewSuccess = (item) => {
  return ({
    type: types.SAVE_REVIEW_SUCCESS,
    item
  })
}

export const saveReview = (review) => (dispatch) =>
  ReviewsApi.saveReview(review)
         .then(result =>
           review.id
              ?  dispatch(updateReviewSuccess(result))
              :  dispatch(saveReviewSuccess(result))
         )
         .catch(error => {
           throw(error)
         })
