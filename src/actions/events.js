import axios from "axios";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const EVENT_UPDATE_SUCCESS = "UPDATE_EVENT_SUCCESS";

const baseUrl = "http://localhost:4000";
const limitOffsetObj = {
  limit: 2,
  offset: 0
};

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
});

const updateEventSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
});

export const loadEvents = page => (dispatch, getState) => {
  // if (getState().events) return;
  axios
    .get(
      `${baseUrl}/event?limit=${limitOffsetObj.limit *
        page}&offset=${limitOffsetObj.offset * page}`
    )
    .then(response => {
      dispatch(eventsFetched(response.data));
    })
    .catch(console.error);
};

export const createEvent = data => dispatch => {
  axios
    .post(`${baseUrl}/event`, { ...data })
    .then(response => {
      dispatch(eventCreateSuccess(response.data));
    })
    .catch(console.error);
};

export const loadEvent = id => dispatch => {
  axios
    .get(`${baseUrl}/event/${id}`)
    .then(res => {
      dispatch(eventFetched(res.data));
    })
    .catch(console.error);
};

export const eventDelete = id => dispatch => {
  axios
    .delete(`${baseUrl}/event/${id}`)
    .then(() => {
      dispatch(eventDeleteSuccess(id));
    })
    .catch(console.error);
};

export const updateEvent = (id, data) => dispatch => {
  axios
    .put(`${baseUrl}/event/${id}`, { ...data })
    .then(res => {
      dispatch(updateEventSuccess(res.data));
    })
    .catch(console.error);
};
