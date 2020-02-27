const initialState = null;

export default function eventReducer(state = initialState, action) {
  // console.log(action.events);

  switch (action.type) {
    case "EVENTS_FETCHED": {
      return (state = [...action.events.events]);
    }
    case "EVENT_CREATE_SUCCESS": {
      return (state = [...state, action.event]);
    }
    case "EVENT_FETCHED": {
      // console.log(action.event);
      return (state = { ...action.event });
    }
    case "UPDATE_EVENT_SUCCESS": {
      return (state = { ...action.event });
    }
    default: {
      return state;
    }
  }
}
