import * as types from './actionTypes';
import http from 'http/http';
import { APP_KEY, EVENTS_API_BASE_URL } from 'constants/constants'

const ROOT_URL = EVENTS_API_BASE_URL + `search?app_key=${APP_KEY}&date=Future` +
            `&image_sizes=perspectivecrop290by250&page_size=100&within=25&location=`;

export const getEventsSuccess = (items) => {
  return ({
    type: types.GET_EVENTS_SUCCESS,
    items
  })
}


export const getEvents = () => (dispatch) =>
  http.get(ROOT_URL).then(result => {
    let events = result.events ? result.events : []
    return dispatch(getEventsSuccess(events.event))
  })
