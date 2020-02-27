import React, { Component } from "react";
// import { connect } from "react-redux";
import EventsListContainer from "./EventsListContainer";
// import { loadEvents } from "../actions/events";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class!</h1>
        <EventsListContainer />
      </div>
    );
  }
}

// function mapPropsToState(reduxState) {
//   return {
//     events: reduxState.eventReducer
//   };
// }

// export default connect(mapPropsToState)(Home);
