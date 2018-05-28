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
