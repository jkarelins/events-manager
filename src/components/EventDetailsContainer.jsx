import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, eventDelete } from "../actions/events";
import EventForm from "./EventForm";

class EventDetailsContainer extends React.Component {
  state = { editMode: false };

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    });
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    // console.log(this.props.event.id, this.state.formValues);
    this.props.updateEvent(this.props.event.id, this.state.formValues);
  };

  onDelete = () => {
    this.props.eventDelete(+this.props.event.id);
    this.props.history.push("/");
  };

  componentDidMount() {
    // console.log(this.props);

    this.props.loadEvent(Number(this.props.match.params.id));
  }

  render() {
    if (this.state.editMode) {
      return (
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state.formValues}
        />
      );
    } else {
      return (
        <div>
          <EventDetails event={this.props.event} />
          <button onClick={this.onDelete}>Delete</button>
          <button onClick={this.onEdit}>Edit</button>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  event: state.eventReducer
});

export default connect(mapStateToProps, {
  loadEvent,
  eventDelete,
  updateEvent
})(EventDetailsContainer);
