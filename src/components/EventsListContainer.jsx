import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import CreateEventFormContainer from "./CreateEventFormContainer";

class EventsListContainer extends React.Component {
  state = {
    page: 1
  };

  next = () => {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    // console.log(newPage);
    this.props.loadEvents(newPage);
  };

  componentDidMount() {
    this.props.loadEvents(this.state.page);
  }

  render() {
    return (
      <div>
        <EventsList events={this.props.events} />
        <button onClick={this.next}>Next</button>
        <CreateEventFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.eventReducer
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
